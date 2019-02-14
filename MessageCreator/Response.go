package messagecreator

import (
	socketModels "blazesockets/protoModels/models"
    msgFrame "blazesockets/multiplayer/MessageFrame"
	"github.com/golang/protobuf/proto"
)


func CreateResponse(request *socketModels.GameResponse) []byte {

	data, err := proto.Marshal(request)
	if err != nil {
		panic(err)
	}

	data = msgFrame.CreateFrame('S', data).Bytes()
	return data
}