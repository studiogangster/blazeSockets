package websockets

import (
	"fmt"
	"net"
	"sync"
	"time"

	"github.com/mailru/easygo/netpoll"
	cMap "github.com/orcaman/concurrent-map"

)

// Channel is a wrapper around websocket, that encapsulates a mutex(for locking), socketName, underlying connection, and fildescriptor associated with the socket.
type Room struct {
	messageFrame   MessageFrame
	engaged        bool
	mutex          sync.RWMutex
	socketName     string
	conn           net.Conn // WebSocket connection
	fileDescriptor *netpoll.Desc
}

var ROOMS = cMap.New()

func CreateRoomViaPlayer(roomName string, creator *Channel, roomSize int) {

	// TODO: DECIDE TO USE CONCIURRENT HASHMAPS OR NOT
	room := make(map[string]*Channel)
	room[creator.socketName] = creator
	// room := cMap.New()
	ROOMS.SetIfAbsent(roomName, room)

}

func CreateRoom(roomName string) {

	// TODO: DECIDE TO USE CONCIURRENT HASHMAPS OR NOT
	room := make(map[string]bool)
	// room := cMap.New()
	ROOMS.SetIfAbsent(roomName, room)
	// TOOD: Update REDIS about the create room

	fmt.Println("Room Created ", room)
	go LogChatRoom()

}

func LogChatRoom() {
	for {


		BroadcastInRoom("test", []byte{1, 2, 3})
		time.Sleep(2 * time.Second)
	}
}

func AddPlayerToRoom(roomName string, player *Channel) {

	room, ok := ROOMS.Get(roomName)
	if ok {
		room.(map[string]bool)[player.socketName] = true
		fmt.Println("Player Added ", room, player.socketName)
	} else {
		fmt.Println("No such room:", room, "for player:", player.socketName)
	}

	// TOOD: Update REDIS about the player add

}

func RemovePlayerFromRoom(roomName string, player *Channel) {

	room, ok := ROOMS.Get(roomName)
	if ok {
		room.(map[string]bool)[player.socketName] = false
	}
	// TOOD: Update REDIS about the player add
}

func BroadcastInRoom(roomName string, data []byte) {
	room, ok := ROOMS.Get(roomName)

	if ok {
		playerInRooms := room.(map[string]bool)

		for playerName, active := range playerInRooms {
			//fmt.Println("BroadcastRoom Playername", playerName)
			fmt.Println(playerName)
			if active {
				playerChannel, ok := SOCKETS.Get(playerName)
				if ok {
					playerChannel.(*Channel).conn.Write(data)
				}

			} else {
			}
		}
	}

}
