package main

import (
	bws "blazesockets/websockets"
	"fmt"
	"net"
	"time"
)

func SendFrame() {
	bws.COUNT = 0

	// connect to this socket
	conn, _ := net.Dial("tcp", "127.0.0.1:8080")

	for {
		time.Sleep(2 * time.Second)
		// testData := make([]byte, 4096)
		msg := bws.CreateFrame('M', "Hello World1")
		conn.SetWriteDeadline(time.Now().Add(time.Second * 10))
		n, err := conn.Write(msg.Bytes()[0:3])
		time.Sleep(time.Second * 5)
		conn.Write(msg.Bytes()[3:])

		bws.COUNT += n
		if err != nil {
			fmt.Println(err)
			// fmt.Println("Bytes Writtedn", bws.COUNT)
			// break
		}
		break
		// fmt.Fprintf(conn, string(msg.Bytes()))
		// fmt.Println("DATA SENT")
		// listen for reply
		// time.Sleep(300 * time.Millisecond)
	}
}

func main() {
	go SendFrame()
	// go bws.PollStatus()
	// msg := bws.CreateFrame(255, "Hello World: Prakhar Agnihotri")
	// r := bytes.NewReader(msg.Bytes())
	// MESSAGE_FRAME := bws.ParseFrame(r)

	// Logs: Message Data
	// fmt.Println("message", MESSAGE_FRAME)
	bws.ServerConfig{
		PORT:       "8080",
		EnableLogs: true,
	}.Configure()
	bws.StartServer()

}
