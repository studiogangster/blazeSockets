package websockets

import (
	wsLogs "blazesockets/logs"

	cMap "github.com/orcaman/concurrent-map"
)

// Server config
var config ServerConfig = ServerConfig{}

// Log Configurator
var log = wsLogs.LogConfig{}

// Creates a netpoller (epoll/kqueue) on start up, where all the sockets that are interested resides!
var poller = createPoller()

// SOCKETS are concurrent hashmap that maps <socketName, *socket>
var SOCKETS = cMap.New()

func configure() {
	log.EnableLogging(SERVER_CONFIG.EnableLogs)
}

func StartServer() {
	startServer()
}
