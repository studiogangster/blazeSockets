package main

import (
	"blazesockets/multiplayer/Server"
	"blazesockets/multiplayer/Serverconfig"
	voip "blazesockets/multiplayer/Voip"
)

func main() {

	go voip.UdpServer() // Start Audio Streaming Server


	configuration := &(serverconfig.ServerConfig{
		PORT:       "8080",
		EnableLogs: true,
	})

	server.Configure(configuration)
	server.StartServer()

}
