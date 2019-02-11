package Room

import (
	memory "blazesockets/InMemoryDB"
	"fmt"
	"net"
	"sync"

	"blazesockets/multiplayer/MessageFrame"
	"github.com/mailru/easygo/netpoll"
)

// Channel is a wrapper around websocket, that encapsulates a mutex(for locking), socketName, underlying connection, and fildescriptor associated with the socket.
type Room struct {
	messageFrame   messageframe.MessageFrame
	engaged        bool
	mutex          sync.RWMutex
	socketName     string
	conn           net.Conn // WebSocket connection
	fileDescriptor *netpoll.Desc
}


func CreateRoom(roomName string) {

	// TODO: DECIDE TO USE CONCIURRENT HASHMAPS OR NOT
	room := make(map[string]bool)
	// room := cMap.New()
	memory.ROOMS.SetIfAbsent(roomName, room)
	// TOOD: Update REDIS about the create room

	fmt.Println("Room Created ", room)


}

