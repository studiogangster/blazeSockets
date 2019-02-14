package messagecreator

import (
	socketModels "blazesockets/protoModels/models"
    msgFrame "blazesockets/multiplayer/MessageFrame"
	"github.com/golang/protobuf/proto"
)


func CreateRequest(request *socketModels.GameRequest) []byte {

	data, err := proto.Marshal(request)
	if err != nil {
		panic(err)
	}

	data = msgFrame.CreateFrame('C', data).Bytes()
	return data
}
