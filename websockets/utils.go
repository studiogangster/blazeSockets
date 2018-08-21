package websockets

import (
	wsLogs "blazesockets/logs"
	"bytes"
	"fmt"
	"net"
	"runtime"
	"strconv"
	"sync"
	"sync/atomic"
	"time"

	"github.com/gobwas/ws"
	"github.com/mailru/easygo/netpoll"
)

var COUNT int
var R_COUNT int

type PingBraodcastIteration struct {
	sync.Mutex
	isRunning bool
}

// Handling of message recieved from the socket! sessionKey is the socket key, and data contains the byte array of recieved socket frame
func handleMessage(data []byte, channel *Channel) {
	fmt.Println(wsLogs.WS_CLIENT_LOGS, "SESSION_KEY:", channel.socketName, "READ_MESSAGE:", string(data))
}

// PingBraodcastIteration Methods
func (pingStruct PingBraodcastIteration) broadcastPing() {
	pingStruct.isRunning = true
	pingFrame := ws.NewPingFrame(nil)
	pingStruct.Lock()
	for item := range SOCKETS.Iter() {
		channel, ok := item.Val.(*Channel)
		if ok {
			channel.writer(pingFrame)
		} else {
		}
	}
	pingStruct.Unlock()
	pingFrame = ws.Frame{}
	time.Sleep(2 * time.Second)
	pingStruct.broadcastPing()
}

var rLocks int64

var wLocks int64

func PollStatus() {

	for {
		fmt.Println("rLocks", atomic.LoadInt64(&rLocks))
		fmt.Println("wLocks", atomic.LoadInt64(&wLocks))
		fmt.Println("W_COUNT", COUNT)
		fmt.Println("R_COUNT", R_COUNT)

		time.Sleep(2 * time.Second)
	}

}

// Handle read(), close() event on a socket, when netpoller informs the socket is read ready. This happens in it's own goroutine
func handleOnNetPollReadEventrigger(ev netpoll.Event, poller netpoll.Poller, channel *Channel) {

	channel.mutex.RLock()
	atomic.AddInt64(&rLocks, 1)
	if channel.engaged == true {
		// fmt.Println("GoRoutine Already Engaged in Doing Task")
		// Already a gorotine is reading the data from same channel, so return
		channel.mutex.RUnlock()
		atomic.AddInt64(&rLocks, -1)
		return
	} else {
		fmt.Println("GoRoutine Assigned Task")
		channel.mutex.RUnlock()
		atomic.AddInt64(&rLocks, -1)
	}

	channel.mutex.Lock()
	channel.engaged = true
	channel.mutex.Unlock()

	// CLOSE EVENT FROM TCP SOCKET
	if ev&netpoll.EventReadHup != 0 {
		channel.close()
		return
	}

	ReadMessageFrame(channel)
	fmt.Println(channel.messageFrame)
	time.Sleep(4 * time.Second)
	// channel.conn.SetReadDeadline(time.Now().Add(500 * time.Millisecond))
	// n, _ := io.ReadFull(channel.conn, data)
	// channel.conn.SetReadDeadline(time.Time{})
	channel.mutex.Lock()
	channel.engaged = false
	atomic.AddInt64(&wLocks, -1)
	channel.mutex.Unlock()

	// channel.buffer.Write(data[:n])
	// fmt.Println(channel.buffer.Len(), "Length Of Bufer")

	// if channel.buffer.Len() >= 5 {

	// 	fmt.Println("Data", channel.buffer.Bytes())
	// 	channel.buffer.Reset()
	// } else {
	// 	fmt.Println("Waiting for data to be completed", channel.buffer.Len())
	// }

	// io.ReadFull(channel.conn, data)

}

// Registering epoll event/ kevent on the queue, and invoke a goroutine once it gets signal, that there is something available for reading
func reigisterReadEvent(poller netpoll.Poller, channel *Channel) {
	// Below is async call, that return the functions and callback gets executed when event occurs!
	// COUNTER := 0
	err := poller.Start(channel.fileDescriptor, func(ev netpoll.Event) {
		// COUNTER++
		// fmt.Println(COUNTER)
		go handleOnNetPollReadEventrigger(ev, poller, channel)
	})

	if err != nil {
		channel.mutex.Lock()

		channel.close()
		channel.mutex.Unlock()
		log.Println(wsLogs.WS_SERVER_LOGS, ":", "reigisterReadEvent()", "REGISTERING", channel.socketName, "Error:", err)
	} else {
		log.Println(wsLogs.WS_SERVER_LOGS, ":", "reigisterReadEvent()", "REGISTERING", channel.socketName, "Success:")
	}

}

// Initialze
func createPoller() netpoll.Poller {
	poller, err := netpoll.New(nil)
	if err != nil {
		// handle error
	}
	return poller
}

// CreateChannel creates a channel from connection for read and write functionality!
func CreateChannel(conn *net.Conn, sessionKey string) {

	channel := &Channel{
		engaged:        false,
		socketName:     sessionKey,
		conn:           *conn,
		fileDescriptor: netpoll.Must(netpoll.HandleRead(*conn)),
	}

	SOCKETS.Set(channel.socketName, channel)
	reigisterReadEvent(poller, channel)

}

func broadCastSync(data []byte) {
	binaryFrame := ws.NewBinaryFrame(data)
	for item := range SOCKETS.Iter() {

		channel, ok := item.Val.(*Channel)
		if ok {
			channel.writer(binaryFrame)
		} else {
		}
	}
	binaryFrame = ws.Frame{}

}

func handleConnection(conn net.Conn, err error) {
	log.Println("New TCP Connection accepted")
	conn.SetDeadline(time.Now().Add(SERVER_CONFIG.Handshaketimeout))
	defer func() {
		if r := recover(); r != nil {
			log.Println(wsLogs.TCP_SERVER_LOGS, ":Defer", "handleConnection()", r)
		}
	}()

	// conn.SetDeadline(time.Now().Add(0 * time.Microsecond))
	if err != nil {
		log.Println(wsLogs.TCP_SERVER_LOGS, ":", "handleConnection()", "Error:", err)
		conn.Close()
		return
		// handle error
	}

	// sessionKey := ""
	// u := ws.Upgrader{
	// 	OnHeader: func(key, value []byte) (err error, code int) {
	// 		sessionKey = string(value)
	// 		return
	// 	},
	// }

	// log.Println(wsLogs.WS_SERVER_LOGS, ":", "Upgrading()")
	// _, err = u.Upgrade(conn)
	if err != nil {
		// handle error
		fmt.Println("Error upgrading socket", err)
		log.Println(wsLogs.WS_SERVER_LOGS, ":", "Upgrade()", "Error:", err)
		err = conn.Close()

		if err != nil {
			fmt.Println("Error", err)
		}
		return

	}
	// Resets deadline to ensure, persistent socket connection
	conn.SetDeadline(time.Time{})
	log.Println(wsLogs.WS_SERVER_LOGS, ":", "Upgrade()", "Success:")

	CreateChannel(&conn, "sessionKey")

}

func getGID() uint64 {
	b := make([]byte, 64)
	b = b[:runtime.Stack(b, false)]
	b = bytes.TrimPrefix(b, []byte("goroutine "))
	b = b[:bytes.IndexByte(b, ' ')]
	n, _ := strconv.ParseUint(string(b), 10, 64)
	fmt.Println("GoRutine", "Main", n)
	return n
}

func startServer() {

	ln, err := net.Listen("tcp", "0.0.0.0:"+SERVER_CONFIG.PORT)
	if err != nil {
		log.Println(err)
	}
	log.Println("TCP Server", "Listening on PORT:", SERVER_CONFIG.PORT)

	for {
		conn, err := ln.Accept()
		if conn == nil {
			continue
		}
		// Launch a goroutine for handling new accepted connection!
		go handleConnection(conn, err)

	}
}
