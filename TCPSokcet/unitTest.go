package main

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"net"
	_ "net/http/pprof"
	"runtime"
	"strconv"
	"sync"
	"time"

	"github.com/gobwas/ws"
	"github.com/mailru/easygo/netpoll"
	cMap "github.com/orcaman/concurrent-map"
)

var poller = createPoller()
var SOCKETS = cMap.New()

// Packet is the application data
type Packet struct {
	data string
}

// Channel wraps user connection.
type Channel struct {
	mutex      sync.Mutex
	socketName string
	conn       net.Conn // WebSocket connection
}

func (channel *Channel) reader() {
	for {
		b := make([]byte, 100)
		channel.conn.Read(b)
	}
}

func (channel *Channel) writer(wsFrame ws.Frame) {

	// ws.WriteHeader(channel.conn, ws.NewTextFrame("Dummy from").Header)
	ws.WriteFrame(channel.conn, wsFrame)
	// fmt.Println("Sending data to", channel.socketName, err)
}

func handleMessage(data []byte, sesion_key string) {

}

func handleOnNetPollReadEventrigger(ev netpoll.Event, poller netpoll.Poller, desc *netpoll.Desc, channel *Channel) {

	defer func() {
		channel.mutex.Unlock()
	}()

	channel.mutex.Lock()
	// time.Sleep(2 * time.Second)

	if ev&netpoll.EventReadHup != 0 {
		poller.Stop(desc)
		channel.conn.Close()
		SOCKETS.Remove(channel.socketName)
		fmt.Println("CLOSING SOCKET", channel.socketName)
		countOpenFiles()

	}

	header, err := ws.ReadHeader(channel.conn)
	if err != nil {
		// handle error
		poller.Stop(desc)
		SOCKETS.Remove(channel.socketName)
		return
	}

	payload := make([]byte, header.Length)
	// time.Sleep(3 * time.Second)
	_, err = io.ReadFull(channel.conn, payload)
	if err != nil {
		// handle error
		return
	}

	if header.Masked {
		ws.Cipher(payload, header.Mask, 0)
	}
	// fmt.Println("READ FROM", channel.socketName, string(payload))
	// go handleMessage(payload, channel.socketName)

}

func reigisterReadEvent(poller netpoll.Poller, channel *Channel) {

	conn := channel.conn
	desc := netpoll.Must(netpoll.HandleRead(conn))
	// Below is async call, that return the functions and callback gets executed when event occurs!
	poller.Start(desc, func(ev netpoll.Event) {
		// fmt.Println("Recived Message", channel.socketName)
		go handleOnNetPollReadEventrigger(ev, poller, desc, channel)
	})

}

func createPoller() netpoll.Poller {
	poller, err := netpoll.New(nil)
	if err != nil {
		// handle error
	}
	return poller
}

var lock = sync.RWMutex{}

// CreateChannel creates a channel from connection for read and write functionality!
func CreateChannel(conn net.Conn, sessionKey string) {
	channel := &Channel{
		socketName: sessionKey,
		conn:       conn,
	}
	SOCKETS.Set(channel.socketName, channel)
	reigisterReadEvent(poller, channel)

}

func broadCastSync(data []byte) {
	binaryFrame := ws.NewBinaryFrame(data)
	for item := range SOCKETS.Iter() {
		// fmt.Println("ITEM", item.Key)
		// time.Sleep(2 * time.Second)
		channel, ok := item.Val.(*Channel)
		if ok {
			channel.writer(binaryFrame)
		} else {
			fmt.Println("Coudn't convet")
		}
	}

}

func handleConnection(conn net.Conn, err error) {

	defer func() {
		// countOpenFiles()
		if r := recover(); r != nil {
			fmt.Println("DEFER", r)

		}
	}()

	if err != nil {
		fmt.Println("Error initializing socket")
		conn.Close()
		countOpenFiles()
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

	// fmt.Println("Upgrade hoga")
	_, err = u.Upgrade(conn)
	// fmt.Println("Upgrade ho gayi", sessionKey)

	if err != nil {
		// handle error
		fmt.Println("Error upgrading socket", err)
		conn.Close()
		countOpenFiles()

	}
	CreateChannel(conn, sessionKey)

}

func countOpenFiles() {
	// out, err := exec.Command("/bin/sh", "-c", fmt.Sprintf("lsof -p %v", os.Getpid())).Output()
	// if err != nil {
	// 	log.Fatal(err)
	// }

	// lines := strings.Split(string(out), "\n")
	// fmt.Println(len(lines) - 1)

}

func listGoRotines() {
	for {
		start := time.Now()
		broadCastSync([]byte("Sample Data"))
		t := time.Now()
		elapsed := t.Sub(start)
		fmt.Println("Broadcast Time", elapsed)
		time.Sleep(1000 * time.Millisecond)
	}
	// for {

	// 	goRotienes := runtime.NumGoroutine()
	// 	fmt.Println("goRotienes listGoRotines", goRotienes, "#", getGID())
	// 	time.Sleep(1000 * time.Millisecond)
	// }

}

func getGID() uint64 {
	b := make([]byte, 64)
	b = b[:runtime.Stack(b, false)]
	b = bytes.TrimPrefix(b, []byte("goroutine "))
	b = b[:bytes.IndexByte(b, ' ')]
	n, _ := strconv.ParseUint(string(b), 10, 64)
	return n
}

func main() {

	go listGoRotines()
	fmt.Println("goRotiene Main", "#", getGID())
	ln, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Spinning TCP Server")

	for {
		conn, err := ln.Accept()
		go handleConnection(conn, err)
	}
}
