package main

import (
	"blazesockets/multiplayer/Server"
	"blazesockets/multiplayer/Serverconfig"
)


func main() {

	configuration := &(serverconfig.ServerConfig{
		PORT:       "8080",
		EnableLogs: true,

	})

	server.Configure( configuration )
	server.StartServer()

}
