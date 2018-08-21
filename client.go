package main

import (
	bws "blazesockets/websockets"
	"fmt"
	"net"
	"time"
)

func SendFrasme() {
	time.Sleep(4 * time.Second)
	// connect to this socket
	conn, _ := net.Dial("tcp", "127.0.0.1:798080")

	for {
		time.Sleep(4 * time.Second)
		msg := bws.CreateFrame('M', "Hello Bitch")

		fmt.Fprintf(conn, string(msg.Bytes()))
		fmt.Println("DATA SENT")
		// listen for reply
	}
}
