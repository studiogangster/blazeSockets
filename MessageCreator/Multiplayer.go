package messagecreator

import (
	socketModels "blazesockets/protoModels/models"
    msgFrame "blazesockets/multiplayer/MessageFrame"
	"github.com/golang/protobuf/proto"
)

func RoomCreate(message *socketModels.RoomCreate) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}

	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_CREATE,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}

func RoomJoin(message *socketModels.RoomJoin) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_JOIN,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}

func RoomLeave(message *socketModels.RoomLeave) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_LEAVE,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}

func RoomDestroy(message *socketModels.RoomDestroy) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_DESTROY,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}

func RoomHalt(message *socketModels.RoomHalt) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_HALT,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}

func RoomGetDetails(message *socketModels.RoomGetDetails) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_GET_DETAILS,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}

func RoomGetDetailsEvent(message *socketModels.GenericEvent) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_ADD_PLAYER,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}

func RoomAddPlayer(message *socketModels.RoomAddPlayer) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_ADD_PLAYER,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}

func RoomKickPlayer(message *socketModels.RoomKickPlayer) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_KICK_PLAYER,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}

func RoomSendMessage(message *socketModels.RoomSendMessage) []byte {

	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_SEND_MESSAGE,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}


func RoomGetPlayers(message *socketModels.RoomGetPlayers ) []byte {
	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_ROOM_GET_PLAYERS,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}


func PlayersInRoom(message *socketModels.PlayersInRoom ) []byte {
	data, err := proto.Marshal(message)
	if err != nil {
		panic(err)
	}
	data, err = proto.Marshal(&socketModels.MultiplayerMessage{
		MultiplayerMessageType: socketModels.MultiplayerMessageType_PLAYERS_IN_ROOM,
		Messsage:               data,
	})

	data = msgFrame.CreateFrame('M', data).Bytes()
	return data
}
