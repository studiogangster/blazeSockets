package messagecreator

import (
	socketModels "blazesockets/protoModels/models"
    msgFrame "blazesockets/multiplayer/MessageFrame"
	"github.com/golang/protobuf/proto"
)


func CreateEvent(request *socketModels.GameEvent) []byte {

	data, err := proto.Marshal(request)
	if err != nil {
		panic(err)
	}

	data = msgFrame.CreateFrame('E', data).Bytes()
	return data
}