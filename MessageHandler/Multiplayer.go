package messageframer

import (
	room "blazesockets/multiplayer/Room"
	socketModels "blazesockets/protoModels/models"
	"fmt"

	"github.com/golang/protobuf/proto"
)

func ParseMultiplayerModel(payload []byte) *socketModels.MultiplayerMessage {

	multiplayerMessage := new(socketModels.MultiplayerMessage)
	err := proto.Unmarshal(payload, multiplayerMessage)
	if err != nil {
		panic(err)

	}
	return multiplayerMessage
}
func HandleMultiplayerMessage(message *socketModels.MultiplayerMessage) {

	switch message.MultiplayerMessageType {

	case socketModels.MultiplayerMessageType_ROOM_CREATE:
		fmt.Println("MultiplayerMessageType_ROOM_CREATE")
		message := roomCreate(message.Messsage)

		room.CreateRoom(message.RoomName)
		break

	case socketModels.MultiplayerMessageType_ROOM_JOIN:
		fmt.Println("MultiplayerMessageType_ROOM_JOIN")
		roomJoin(message.Messsage)
		break

	case socketModels.MultiplayerMessageType_ROOM_LEAVE:
		fmt.Println("MultiplayerMessageType_ROOM_LEAVE")
		roomLeave(message.Messsage)
		break
	case socketModels.MultiplayerMessageType_ROOM_DESTROY:
		fmt.Println("MultiplayerMessageType_ROOM_DESTROY")
		roomDestroy(message.Messsage)
		break
	case socketModels.MultiplayerMessageType_ROOM_HALT:
		fmt.Println("MultiplayerMessageType_ROOM_HALT")
		roomHalt(message.Messsage)
		break
	case socketModels.MultiplayerMessageType_ROOM_GET_DETAILS:
		fmt.Println("MultiplayerMessageType_ROOM_GET_DETAILS")
		roomGetDetails(message.Messsage)
		break

	case socketModels.MultiplayerMessageType_ROOM_ADD_PLAYER:
		fmt.Println("MultiplayerMessageType_ROOM_ADD_PLAYER")
		roomAddPlayer(message.Messsage)
		break

	case socketModels.MultiplayerMessageType_ROOM_KICK_PLAYER:
		fmt.Println("MultiplayerMessageType_ROOM_KICK_PLAYER")
		roomKickPlayer(message.Messsage)
		break

	case socketModels.MultiplayerMessageType_ROOM_SEND_MESSAGE:
		fmt.Println("MultiplayerMessageType_ROOM_SEND_MESSAGE")
		roomSendMessage(message.Messsage)
		break
	}

}

func roomCreate(payload []byte) *socketModels.RoomCreate {

	message := new(socketModels.RoomCreate)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}
	return message
}

func roomJoin(payload []byte) *socketModels.RoomJoin {

	message := new(socketModels.RoomJoin)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}

	return message
}

func roomLeave(payload []byte) *socketModels.RoomLeave {

	message := new(socketModels.RoomLeave)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}
	return message
}

func roomDestroy(payload []byte) *socketModels.RoomDestroy {

	message := new(socketModels.RoomDestroy)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}
	return message
}

func roomHalt(payload []byte) *socketModels.RoomHalt {

	message := new(socketModels.RoomHalt)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}
	return message
}

func roomGetDetails(payload []byte) *socketModels.RoomGetDetails {

	message := new(socketModels.RoomGetDetails)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}
	return message
}

func roomAddPlayer(payload []byte) *socketModels.RoomAddPlayer {

	message := new(socketModels.RoomAddPlayer)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}
	return message
}

func roomKickPlayer(payload []byte) *socketModels.RoomKickPlayer {

	message := new(socketModels.RoomKickPlayer)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}
	return message
}

func roomSendMessage(payload []byte) *socketModels.RoomSendMessage {

	message := new(socketModels.RoomSendMessage)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}
	return message
}

//
