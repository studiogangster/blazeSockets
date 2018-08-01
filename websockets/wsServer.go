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
	cMap "github.com/orcaman/concurrent-map"
)

// Log Configurator
var log = wsLogs.LogConfig{
	LogsEnabled: false,
}

// Creates a netpoller (epoll/kqueue) on start up, where all the sockets that are interested resides!
var poller = createPoller()

// SOCKETS are concurrent hashmap that maps <socketName, *socket>
var SOCKETS = cMap.New()

// ServerConfig is the configuration for server
type ServerConfig struct {
	PORT             int
	enableLogs       bool
	Handshaketimeout time.Duration
}

type PingBraodcastIteration struct {
	sync.Mutex
	isRunning bool
}

// Channel is a wrapper around websocket, that encapsulates a mutex(for locking), socketName, underlying connection, and fildescriptor associated with the socket.
type Channel struct {
	mutex          sync.Mutex
	socketName     string
	conn           net.Conn // WebSocket connection
	fileDescriptor *netpoll.Desc
}

// TODO Handle Edge case for parallel execution and deadlock
// Channel.close() is used to gracefully close the connection, remove from the concurrent hashmap, remove from the nepoller queue, and finaly close the file descriptor associated with it.
func (channel *Channel) close() {

	SOCKETS.Remove(channel.socketName)
	// Not interested in any event from this socket, Remove from netpoll/epoll/kqueue
	poller.Stop(channel.fileDescriptor)
	// Close the socket connection
	channel.conn.Close()
	// Remove the file descriptor associated with that socket
	channel.fileDescriptor.Close()
	log.Println(wsLogs.WS_SERVER_LOGS, channel.socketName)
	return
}

func (channel *Channel) reader() {
	for {
		b := make([]byte, 100)
		channel.conn.Read(b)
	}
}

// Writer is used to push websocket frame through the socket
func (channel *Channel) writer(wsFrame ws.Frame) {
	err := ws.WriteFrame(channel.conn, wsFrame)
	log.Println(wsLogs.WS_CLIENT_LOGS, ":", channel.socketName, "Coudn't write websocket frame to socket", "Error:", err)

}

// Handling of message recieved from the socket! sessionKey is the socket key, and data contains the byte array of recieved socket frame
func handleMessage(data []byte, sesionKey string) {
	fmt.Println(wsLogs.WS_CLIENT_LOGS, "SESSION_KEY:", sesionKey, "READ_MESSAGE:", string(data))
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

	handleMessage(wsFrame.Payload, channel.socketName)

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
func CreateChannel(conn *net.Conn, sessionKey *string) {

	channel := &Channel{
		socketName:     *sessionKey,
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

func handleConnection(conn net.Conn, err error) {

	defer func() {
		// countOpenFiles()
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
	conn.SetDeadline(time.Time{})
	log.Println(wsLogs.WS_SERVER_LOGS, ":", "Upgrade()", "Success:")

	CreateChannel(&conn, &sessionKey)

}

func listGoRotines() {
	for {
		start := time.Now()
		broadCastSync([]byte("Sample Data"))
		t := time.Now()
		elapsed := t.Sub(start)
		fmt.Println("Broadcast Time", elapsed)
		time.Sleep(4000 * time.Millisecond)
	}
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

func startServer(PORT string, timeout time.Duration) {

	ln, err := net.Listen("tcp", "0.0.0.0:"+PORT)
	if err != nil {
		log.Println(err)
	}
	log.Println("TCP Server", "Listening on PORT:", PORT)

	for {
		conn, err := ln.Accept()
		if conn == nil {
			continue
		}
		log.Println("New TCP Connection accepted")
		conn.SetDeadline(time.Now().Add(timeout))
		go handleConnection(conn, err)
	}
}

func StartServer(config ServerConfig) {
	startServer(strconv.Itoa(config.PORT), config.Handshaketimeout)
}
