package main

import (
	"fmt"
	"log"
	"net"
	"os"
)

func write(data []byte, f *os.File) {

	f.Write(data)
}
func handleConnection(conn net.Conn, err error) {
	fmt.Println("Handking")
	f, err := os.OpenFile("sound.3gp", os.O_APPEND|os.O_WRONLY, 0600)
	if err != nil {
		panic(err)
	}

	defer f.Close()

	for {
		// fmt.Println("Readoing")
		data := make([]byte, 1024)
		conn.Read(data)
		fmt.Println((data))
		// write(data, f)
	}

	fmt.Println("Closig")

}

func _main() {

	ln, err := net.Listen("tcp", "0.0.0.0:8080")
	if err != nil {
		log.Println(err)
	}

	for {
		conn, err := ln.Accept()
		if conn == nil {
			continue
		}
		// Launch a goroutine for handling new accepted connection!
		go handleConnection(conn, err)

	}
}
