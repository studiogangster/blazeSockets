package main

import (
	bws "blazesockets/websockets"
	"time"
)

func main() {

	bws.StartServer(bws.ServerConfig{
		Handshaketimeout: 2000 * time.Millisecond,
		PORT:             8080,
	})
}
