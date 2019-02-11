package InMemoryDB

import "github.com/mailru/easygo/netpoll"

// Creates a netpoller (epoll/kqueue) on start up, where all the sockets that are interested resides!
var Poller = createPoller()
// Initialze

func createPoller() netpoll.Poller {
	poller, err := netpoll.New(nil)
	if err != nil {
		// handle error
	}
	return poller
}

