package server

import (
	wsLogs "blazesockets/logs"
	memory "blazesockets/InMemoryDB"
)

// Server config
var Config ServerConfig = ServerConfig{}

// Log Configurator
var log = wsLogs.LogConfig{}

// Creates a netpoller (epoll/kqueue) on start up, where all the sockets that are interested resides!
var Poller = createPoller()

// SOCKETS are concurrent hashmap that maps <socketName, *socket>
var SOCKETS = memory.SOCKETS

func configure() {
	log.EnableLogging(SERVER_CONFIG.EnableLogs)
}

func StartServer() {
	startServer()
}
