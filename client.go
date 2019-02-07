package main

import (
	bws "blazesockets/websockets"
	"fmt"
	"net"
	"time"
)

func msain() {

	// connect to this socket
	conn, _ := net.Dial("tcp", "127.0.0.1:8080")

	for {

		msg := bws.CreateFrame('A', []byte("Hello Bitch"))

		fmt.Fprintf(conn, string(msg.Bytes()))
		fmt.Println("DATA SENT")
		// listen for reply
		time.Sleep(10 * time.Second)
	}
}
