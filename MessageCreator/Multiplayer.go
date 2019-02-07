package messagecreator

import (
	socketModels "blazesockets/protoModels/models"

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

	return data
}
