package main

import (
	bws "blazesockets/websockets"
	"bytes"
	"encoding/binary"
	"fmt"
)

func main() {

	bs := make([]byte, 2)
	binary.LittleEndian.PutUint16(bs, 1)
	fmt.Println(bs)
	num := binary.LittleEndian.Uint16(bs)
	fmt.Println(num)

	msg := bws.CreateFrame("Hello")
	fmt.Println(msg.Bytes())

	r := bytes.NewReader(msg.Bytes())

	bws.ParseFrame(r)

	// bws.ServerConfig{
	// 	Handshaketimeout: 2000 * time.Millisecond,
	// 	EnableLogs:       true,
	// 	PORT:             "8080",
	// }.Configure()

	// bws.StartServer()
}
