package serverconfig

import (
	"time"
)



// ServerConfig is the configuration for server
type ServerConfig struct {
	PORT             int
	EnableLogs       bool
	Handshaketimeout time.Duration
}


