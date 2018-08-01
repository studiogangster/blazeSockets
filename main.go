package main

import (
	bws "blazesockets/websockets"
	"time"
)

func main() {

	bws.StartServer(bws.ServerConfig{
		Handshaketimeout: 2000 * time.Millisecond,
		EnableLogs:       true,
		PORT:             8080,
	})
}
