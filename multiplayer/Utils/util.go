
package utils

import (

	wsLogs "blazesockets/logs"
"bytes"
"fmt"
"log"
"net"
"runtime"
"strconv"
"sync"
"sync/atomic"
channel "blazesockets/multiplayer/Channel"
"time"
messageframe "blazesockets/multiplayer/MessageFrame"
"github.com/gobwas/ws"
memDb "blazesockets/InMemoryDB"
"github.com/mailru/easygo/netpoll"
)

var COUNT int
var R_COUNT int

const Handshaketimeout = 2

const SOCKET_ONCONNECT_TIMEOUT = 3 // in Seconds

type PingBraodcastIteration struct {
	sync.Mutex
	isRunning bool
}

// Handling of message recieved from the socket! sessionKey is the socket key, and data contains the byte array of recieved socket frame
func HandleMessage(data []byte, channel *channel.Channel) {
	fmt.Println(wsLogs.WS_CLIENT_LOGS, "SESSION_KEY:", channel.SocketName, "READ_MESSAGE:", string(data))
}

// PingBraodcastIteration Methods
func (pingStruct PingBraodcastIteration) broadcastPing() {
	pingStruct.isRunning = true
	pingFrame := ws.NewPingFrame(nil)
	pingStruct.Lock()
	for item := range memDb.SOCKETS.Iter() {
		channel, ok := item.Val.(*channel.Channel)
		if ok {
			channel.Write(pingFrame)
		} else {
		}
	}
	pingStruct.Unlock()
	pingFrame = ws.Frame{}
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

// TODO: Since we are using on shot, locks can be removed
// Handle read(), close() event on a socket, when netpoller informs the socket is read ready. This happens in it's own goroutine
func handleOnNetPollReadEventrigger(ev netpoll.Event, poller netpoll.Poller, channel *channel.Channel) {

	channel.Mutex.RLock()
	atomic.AddInt64(&rLocks, 1)
	if channel.Engaged == true {
		// fmt.Println("GoRoutine Already Engaged in Doing Task")
		// Already a gorotine is reading the data from same channel, so return
		channel.Mutex.RUnlock()
		atomic.AddInt64(&rLocks, -1)
		return
	} else {
		//fmt.Println("GoRoutine Assigned Task")
		channel.Mutex.RUnlock()
		atomic.AddInt64(&rLocks, -1)
	}

	channel.Mutex.Lock()
	// poller.Stop(channel.fileDescriptor)
	channel.Engaged = true
	channel.Mutex.Unlock()

	// CLOSE EVENT FROM TCP SOCKET
	if ev&netpoll.EventReadHup != 0 {
		//fmt.Println("Close Event From Socket")
		channel.Close()
		return
	}

	channel.ReadMessageFrame()
	// fmt.Println(channel.messageFrame)
	// time.Sleep(4 * time.Second)
	// channel.conn.SetReadDeadline(time.Now().Add(500 * time.Millisecond))
	// n, _ := io.ReadFull(channel.conn, data)
	// channel.conn.SetReadDeadline(time.Time{})
	channel.Mutex.Lock()
	channel.Engaged = false
	atomic.AddInt64(&wLocks, -1)
	channel.Mutex.Unlock()

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
func reigisterReadEvent(poller netpoll.Poller, channel *channel.Channel) {
	// Below is async call, that return the functions and callback gets executed when event occurs!

	err := poller.Start(channel.FileDescriptor, func(ev netpoll.Event) {
		// COUNTER++
		// fmt.Println(COUNTER)
		go handleOnNetPollReadEventrigger(ev, poller, channel)
	})

	if err != nil {
		// redis.UserDisconnected(channel.socketName)
		channel.Mutex.Lock()
		channel.Close()
		channel.Mutex.Unlock()
		log.Println(wsLogs.WS_SERVER_LOGS, ":", "reigisterReadEvent()", "REGISTERING", channel.SocketName, "Error:", err)
	} else {
		// redis.UserConnected(channel.socketName)
		log.Println(wsLogs.WS_SERVER_LOGS, ":", "reigisterReadEvent()", "REGISTERING", channel.SocketName, "Success:")
	}

}



// CreateChannel creates a channel from connection for read and write functionality!
func CreateChannel(conn *net.Conn, sessionKey string) {

	log.Println("Sessionkey", sessionKey)
	channel := &channel.Channel{
		Engaged:        false,
		SocketName:     sessionKey,
		Conn:           *conn,
		FileDescriptor: netpoll.Must(netpoll.Handle(*conn, netpoll.EventRead|netpoll.EventOneShot)), //Configuring oneshot/edhe trigger kqueue

		// fileDescriptor: netpoll.Must(netpoll.HandleReadOnce(*conn)), //Configuring oneshot/edhe trigger kqueue
		MessageFrame: messageframe.MessageFrame{
			MessageLength: make([]byte, 2),
		},
	}

	memDb.SOCKETS.Set(sessionKey, channel)

	reigisterReadEvent(memDb.Poller, channel)

	//AddPlayerToRoom("test", channel)

}

func BroadCastSync(data []byte) {

	for item := range memDb.SOCKETS.Iter() {

		channel, ok := item.Val.(*channel.Channel)
		if ok {
			channel.Conn.Write(data)
		} else {
		}
	}

}

func HandleConnection(conn net.Conn, err error) {

	defer func() {
		if r := recover(); r != nil {
			log.Println(wsLogs.TCP_SERVER_LOGS, ":Defer", "handleConnection()", r)
		}
	}()

	if err != nil {
		log.Println(wsLogs.TCP_SERVER_LOGS, ":", "handleConnection()", "Error:", err)
		conn.Close()
		return
		// handle error
	}

	// 	Check if socket passes auth token, if not discard and close the connection
	conn.SetDeadline(time.Now().Add(Handshaketimeout * time.Second))

	authToken := make([]byte, 100)

	_, err = conn.Read(authToken)

	if err != nil {
		fmt.Println("Authtoken not recieved within timeout")
		conn.Close()
		return
	}

	authenticate(authToken)

	// Resets deadline to ensure, persistent socket connection
	conn.SetDeadline(time.Time{})
	log.Println(wsLogs.WS_SERVER_LOGS, ":", "Upgrade()", "Success:")

	CreateChannel(&conn, string(authToken))

}

// TODO: Store user in redis, and return session Key
func authenticate(token []byte) {
	log.Println("Authenticating" , token)
}

// TODO: Shall be removed in production
func getGID() uint64 {
	b := make([]byte, 64)
	b = b[:runtime.Stack(b, false)]
	b = bytes.TrimPrefix(b, []byte("goroutine "))
	b = b[:bytes.IndexByte(b, ' ')]
	n, _ := strconv.ParseUint(string(b), 10, 64)
	fmt.Println("GoRutine", "Main", n)
	return n
}





