package messageHandler

import (
	socketModels "blazesockets/protoModels/models"
	"github.com/golang/protobuf/proto"
)

func CreateRoom(roomToken string, authToken string) []byte {

	messageinBytes , _ := proto.Marshal( &socketModels.MultiplayerHandshake{
		ActionType:socketModels.ActionType_ROOM_CREATE,
		RoomToken: roomToken,
		AuthToken: authToken,

	} )

	return messageinBytes

}

func JoinRoom(roomToken string, authToken string) []byte {

	messageinBytes , _ := proto.Marshal( &socketModels.MultiplayerHandshake{
		ActionType:socketModels.ActionType_ROOM_CREATE,
		RoomToken: roomToken,
		AuthToken: authToken,

	} )

	return messageinBytes

}

func BroadcastMessage(roomToken string, authToken string) []byte {

	messageinBytes , _ := proto.Marshal( &socketModels.MultiplayerHandshake{
		ActionType:socketModels.ActionType_ROOM_CREATE,
		RoomToken: roomToken,
		AuthToken: authToken,
	} )
	return messageinBytes

}




