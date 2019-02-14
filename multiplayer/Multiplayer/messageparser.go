package channel

import (
	"blazesockets/MessageCreator"
	"blazesockets/multiplayer/MessageFrame"
	"log"

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



func HandleMultiplayerEvents(eventType socketModels.MultiplayerMessageType, roomName string,message string){


	data , err := proto.Marshal(&socketModels.GenericEvent{
		EventType: eventType,
		Message: message,
	})

	if err == nil{
		data = messageframe.CreateFrame('M', data).Bytes()
		BroadcastInRoom( roomName,  data)
	}



}


func (channel *Channel)  HandleMultiplayerMessage(message *socketModels.MultiplayerMessage) {

	switch message.MultiplayerMessageType {
	//Message Parser

	case socketModels.MultiplayerMessageType_ROOM_CREATE:
		fmt.Println("MultiplayerMessageType_ROOM_CREATE")
		message := roomCreate(message.Messsage)
		room.CreateRoom(message.RoomName)
		break

	case socketModels.MultiplayerMessageType_ROOM_JOIN:
		fmt.Println("MultiplayerMessageType_ROOM_JOIN")
		message :=roomJoin(message.Messsage)
		log.Println("ROOMJOIN", message.RoomToken)
		ok := room.AddPlayerToRoom(message.RoomToken , channel.SocketName)
		if ok{
			HandleMultiplayerEvents(socketModels.MultiplayerMessageType_ROOM_JOIN_EVENT, channel.SocketName, "Joined")
			channel.RoomName = message.RoomToken
		}
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
	case socketModels.MultiplayerMessageType_ROOM_GET_DETAILS_EVENT:
		fmt.Println("MultiplayerMessageType_ROOM_GET_DETAILS_EVENT")
		message := roomGetDetails(message.Messsage)
		roomNames := room.GetRoomNames()

		payload := messagecreator.RoomGetDetails(&socketModels.RoomGetDetails{
			RoomToken: message.RoomToken,
			Players:roomNames,
		})

		BroadcastInRoom( channel.RoomName, payload )

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

	case socketModels.MultiplayerMessageType_ROOM_GET_PLAYERS:
		fmt.Println("MultiplayerMessageType_ROOM_SEND_MESSAGE")
		message := roomGetPlayers(message.Messsage)

		players := room.GetPlayersInRoom(message.RoomName)

		payload := messagecreator.PlayersInRoom(&socketModels.PlayersInRoom{
			RoomName: message.RoomName,
			Players: players,
		})

		BroadcastInRoom( message.RoomName, payload )


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

func roomGetPlayers(payload []byte) *socketModels.RoomGetPlayers {

	message := new(socketModels.RoomGetPlayers)
	err := proto.Unmarshal(payload, message)
	if err != nil {
		panic(err)
	}
	return message
}

//
