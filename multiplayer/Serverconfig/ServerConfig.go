package serverconfig

import (
	"time"
)



// ServerConfig is the configuration for server
type ServerConfig struct {
	PORT             string
	EnableLogs       bool
	Handshaketimeout time.Duration
}


