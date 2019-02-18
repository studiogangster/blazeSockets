package main

import (
	server "blazesockets/multiplayer/Server"
	serverconfig "blazesockets/multiplayer/Serverconfig"
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
