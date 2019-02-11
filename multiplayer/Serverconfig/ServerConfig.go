package websockets

import (
	"time"
)

var SERVER_CONFIG = ServerConfig{}

// ServerConfig is the configuration for server
type ServerConfig struct {
	PORT             string
	EnableLogs       bool
	Handshaketimeout time.Duration
}

func (serverConfig ServerConfig) Configure() {
	SERVER_CONFIG = serverConfig
	configure()
}
