package server

import (
	"blazesockets/InMemoryDB"
	wsLogs "blazesockets/logs"

	serverConfig "blazesockets/multiplayer/Serverconfig"

	utils "blazesockets/multiplayer/Utils"

	"net"
)

// Server config
var Config serverConfig.ServerConfig = serverConfig.ServerConfig{}

// Log Configurator
var log = wsLogs.LogConfig{}



func Configure(serverConfig *serverConfig.ServerConfig) {
	InMemoryDB.ServerConfig = serverConfig
	log.EnableLogging(serverConfig.EnableLogs)
}

func StartServer() {
	startServer()
}


//Core functionality



func startServer() {

	ln, err := net.Listen("tcp", "0.0.0.0:"+InMemoryDB.ServerConfig.PORT)
	if err != nil {
		log.Println(err)
	}

	log.Println("BlazeSocket: ", "Listening on PORT:",InMemoryDB.ServerConfig.PORT)

	for {
		conn, err := ln.Accept()
		if conn == nil {
			continue
		}
		// Launch a goroutine for handling new accepted connection!
		go utils.HandleConnection(conn, err)

	}
}


//func (serverConfig Server) Configure() {
//	SERVER_CONFIG = serverConfig
//	server.Configure()
//}