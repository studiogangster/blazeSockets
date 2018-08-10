package websockets

import (
	wsLogs "blazesockets/logs"
	"net"
	"sync"

	"github.com/gobwas/ws"
	"github.com/mailru/easygo/netpoll"
)

// Channel is a wrapper around websocket, that encapsulates a mutex(for locking), socketName, underlying connection, and fildescriptor associated with the socket.
type Channel struct {
	mutex          sync.Mutex
	socketName     string
	conn           net.Conn // WebSocket connection
	fileDescriptor *netpoll.Desc
}

// TODO Handle Edge case for parallel execution and deadlock
// Channel.close() is used to gracefully close the connection, remove from the concurrent hashmap, remove from the nepoller queue, and finaly close the file descriptor associated with it.
func (channel *Channel) close() {

	SOCKETS.Remove(channel.socketName)
	// Not interested in any event from this socket, Remove from netpoll/epoll/kqueue
	poller.Stop(channel.fileDescriptor)
	// Close the socket connection
	channel.conn.Close()
	// Remove the file descriptor associated with that socket
	channel.fileDescriptor.Close()
	log.Println(wsLogs.WS_SERVER_LOGS, channel.socketName)
	return
}

// Channel.pause() is used to stop listening  connection, remove from the concurrent hashmap, remove from the nepoller queue, and finaly close the file descriptor associated with it.
func (channel *Channel) pause() {

	return
}

func (channel *Channel) reader() {
	for {
		b := make([]byte, 100)
		channel.conn.Read(b)
	}
}

// Writer is used to push websocket frame through the socket
func (channel *Channel) writer(wsFrame ws.Frame) {

	err := ws.WriteFrame(channel.conn, wsFrame)
	if err != nil {
		log.Println(wsLogs.WS_CLIENT_LOGS, ":", channel.socketName, "Coudn't write websocket frame to socket", "Error:", err)
		return

	}
}
