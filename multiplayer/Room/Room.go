package Room

import (
	memory "blazesockets/InMemoryDB"
	"log"
	"blazesockets/multiplayer/GameEngines/core"
)



func CreateRoom(roomName string) (*gameengine.GameEngine) {

	// TODO: DECIDE TO USE CONCIURRENT HASHMAPS OR NOT
	room := make(map[string]bool)
	// room := cMap.New()
	memory.ROOMS.SetIfAbsent(roomName, room)
	// TOOD: Update REDIS about the create room
	log.Println("Room Created ", roomName)
	//ADDRESS WILL BE RECIEVED FROM API, CURRENTLY HARDCODED
	return gameengine.GetGameEngine(roomName, "localhost:7071")




}

func DeleteRoom(roomName string) {


	memory.ROOMS.Remove(roomName)
	// TOOD: Update REDIS about the create room
	log.Println("Room Deleted ", roomName)

}

func AddPlayerToRoom(roomName string, socketName string) bool{
	item, ok := memory.ROOMS.Get(roomName)

	if ok {
		item.(map[string]bool)[socketName] = true
		//HandleMultiplayerEvents(socketModels.MultiplayerMessageType_ROOM_JOIN_EVENT, socketName, "Joined")
	}

	return ok

}
func LeaveRoom(roomName string, socketName string) bool{
	item, ok := memory.ROOMS.Get(roomName)

	if ok {
		item.(map[string]bool)[socketName] = false

		//HandleMultiplayerEvents(socketModels.MultiplayerMessageType_ROOM_JOIN_EVENT, socketName, "Joined")
	}

	return ok

}

func GetRoomNames() []string {

	// TODO: DECIDE TO USE CONCIURRENT HASHMAPS OR NOT
	// room := cMap.New()
	roomNames := make([]string , memory.ROOMS.Count())

	for item := range memory.ROOMS.IterBuffered() {
		roomNames = append(roomNames ,  item.Key)
	}
	// TOOD: Update REDIS about the create room
	return roomNames

}

func GetPlayersInRoom(roomName string) []string {

	// TODO: DECIDE TO USE CONCIURRENT HASHMAPS OR NOT

	// room := cMap.New()


	item, ok := memory.ROOMS.Get(roomName)

	var roomNames []string

	if ok{
		roomNames := make([]string , len(item.(map[string]bool ) ) )
		for  key := range  item.(map[string]bool) {
			roomNames = append(roomNames ,  key)
		}
	}
	// TOOD: Update REDIS about the create room
	return roomNames

}



