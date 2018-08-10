package websockets

import (
	wsLogs "blazesockets/logs"
	"bytes"
	"fmt"
	"net"
	"runtime"
	"strconv"
	"sync"
	"time"

	"github.com/gobwas/ws"
	"github.com/mailru/easygo/netpoll"
)

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

// Handle read(), close() event on a socket, when netpoller informs the socket is read ready. This happens in it's own goroutine
func handleOnNetPollReadEventrigger(ev netpoll.Event, poller netpoll.Poller, channel *Channel) {

	channel.mutex.Lock()

	// CLOSE EVENT FROM TCP SOCKET
	if ev&netpoll.EventReadHup != 0 {
		channel.close()
		channel.mutex.Unlock()
		return
	}

	wsFrame, err := ws.ReadFrame(channel.conn)
	channel.mutex.Unlock()

	if err != nil {
		return
	}

	// Succesfuly read the payload from websokcet frame, now unmask it, if required
	if wsFrame.Header.Masked {
		ws.Cipher(wsFrame.Payload, wsFrame.Header.Mask, 0)
	}

	// Payload has the read data
	handleMessage(wsFrame.Payload, channel)

}

// Registering epoll event/ kevent on the queue, and invoke a goroutine once it gets signal, that there is something available for reading
func reigisterReadEvent(poller netpoll.Poller, channel *Channel) {
	// Below is async call, that return the functions and callback gets executed when event occurs!

	err := poller.Start(channel.fileDescriptor, func(ev netpoll.Event) {
		log.Println(wsLogs.WS_CLIENT_LOGS, ":", channel.socketName, "Socket ready for read")
		getGID()
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
		socketName:     sessionKey,
		conn:           *conn,
		fileDescriptor: netpoll.Must(netpoll.HandleRead(*conn)),
	}

	SOCKETS.Set(channel.socketName, channel)
	// reigisterReadEvent(poller, channel)

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

	sessionKey := ""
	u := ws.Upgrader{
		OnHeader: func(key, value []byte) (err error, code int) {
			sessionKey = string(value)
			return
		},
	}

	log.Println(wsLogs.WS_SERVER_LOGS, ":", "Upgrading()")
	_, err = u.Upgrade(conn)
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

	CreateChannel(&conn, sessionKey)

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

		go handleConnection(conn, err)

	}
}
