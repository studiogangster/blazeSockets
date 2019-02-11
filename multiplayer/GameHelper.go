package multiplayer

import (
	"blazesockets/InMemoryDB"
	"blazesockets/multiplayer/Channel"
	"fmt"
	"time"
)

func LogChatRoom() {
	for {

		BroadcastInRoom("test", []byte{1, 2, 3})
		time.Sleep(2 * time.Second)
	}
}





func BroadcastInRoom(roomName string, data []byte) {
	room, ok := InMemoryDB.ROOMS.Get(roomName)

	if ok {
		playerInRooms := room.(map[string]bool)

		for playerName, active := range playerInRooms {
			//fmt.Println("BroadcastRoom Playername", playerName)
			fmt.Println(playerName)
			if active {
				playerChannel, ok := InMemoryDB.SOCKETS.Get(playerName)
				if ok {
					playerChannel.(*channel.Channel).Conn.Write(data)
				}

			} else {
			}
		}
	}

}
