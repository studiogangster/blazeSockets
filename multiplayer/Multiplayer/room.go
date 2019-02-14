package channel

import (
	"blazesockets/InMemoryDB"
	"fmt"
)

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
					playerChannel.(*Channel).Conn.Write(data)
				}

			} else {
			}
		}
	}

}