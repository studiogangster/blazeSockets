package logs

import "log"

const TCP_SERVER_LOGS = "TCP sLOGS"
const TCP_CLIENT_LOGS = "TCP cLOGS"
const WS_SERVER_LOGS = "WS sLOGS"
const WS_CLIENT_LOGS = "WS cLOGS"

type LogConfig struct {
	LogsEnabled bool
}

func (lConfig LogConfig) EnableLogging(logging bool) {
	lConfig.LogsEnabled = logging
}

func (lConfig LogConfig) Println(args ...interface{}) {
	if lConfig.LogsEnabled == true {
		log.Println(args)
	}
}
