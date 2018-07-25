package main

import (
	"fmt"
	"io"
	"log"
	"net"
	"os"
	"os/exec"
	"strings"
	"sync"

	"github.com/gobwas/ws"
	"github.com/mailru/easygo/netpoll"
)

var SOCKETS = make(map[string]*Channel)

var poller = createPoller()

// Packet is the application data
type Packet struct {
	data string
}

// Channel wraps user connection.
type Channel struct {
	socket_name string
	conn        net.Conn // WebSocket connection.
	// send chan Packet // Outgoing packets queue.

}

func (channel *Channel) reader() {

	for {
		b := make([]byte, 100)
		channel.conn.Read(b)
		// fmt.Println("Byte", string(n))
	}
}

func (channel *Channel) writer() {
	// fmt.Println("go writer ready")
}

func handleMessage(data []byte, sesion_key string) {
	// fmt.Println("HandleMessage", string(data))
}

func reigisterReadEvent(poller netpoll.Poller, channel *Channel) {
	conn := channel.conn
	desc := netpoll.Must(netpoll.HandleRead(conn))
	// Below is async call, that return the functions and callback gets executed when event occurs!
	poller.Start(desc, func(ev netpoll.Event) {

		// fmt.Println("Async Callback")
		if ev&netpoll.EventReadHup != 0 {
			poller.Stop(desc)
			conn.Close()
			countOpenFiles()
			// fmt.Println("Data Socket Closed" + channel.socket_name)
			return
		}

		header, err := ws.ReadHeader(conn)
		if err != nil {
			// handle error
			poller.Stop(desc)
			conn.Close()
			fmt.Println("Stopping poller", err)
			// countOpenFiles()
			// fmt.Println("WRONG H", channel.socket_name)
			return
		}
		payload := make([]byte, header.Length)

		_, err = io.ReadFull(conn, payload)
		if err != nil {
			// handle error
			// poller.Stop(desc)
			// conn.Close()
			// countOpenFiles()
			fmt.Println("Stopping poller", err)
			return
		}
		if header.Masked {
			ws.Cipher(payload, header.Mask, 0)
		}
		// go handleMessage(payload, channel.socket_name)
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
		socket_name: sessionKey,
		conn:        conn,
	}

	lock.Lock()
	SOCKETS[sessionKey] = channel
	lock.Unlock()
	// fmt.Println("SOCKET", sessionKey)
	reigisterReadEvent(poller, channel)

}

func handleConnection(conn net.Conn, err error) {
	countOpenFiles()
	defer func() {
		// countOpenFiles()
		if r := recover(); r != nil {
			fmt.Println("DEFER", r)
			// fmt.Println("Recovered in f", r)
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
			// time.Sleep(5 * time.Second)
			// fmt.Println("Sleep ho gayi")
			return
		},
	}

	// fmt.Println("Upgrade hoga")
	_, err = u.Upgrade(conn)
	// fmt.Println("Upgrade ho gayi")

	if err != nil {
		// handle error
		fmt.Println("Error upgrading socket")
		conn.Close()
		countOpenFiles()

	}

	CreateChannel(conn, sessionKey)

}

func countOpenFiles() {
	out, err := exec.Command("/bin/sh", "-c", fmt.Sprintf("lsof -p %v", os.Getpid())).Output()
	if err != nil {
		log.Fatal(err)
	}

	lines := strings.Split(string(out), "\n")
	fmt.Println(len(lines) - 1)

}

func main() {

	ln, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Spinning TCP Server")

	for {
		conn, err := ln.Accept()
		fmt.Println("Accepted socket")
		go handleConnection(conn, err)
	}
}
