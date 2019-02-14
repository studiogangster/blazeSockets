package messageframe

import (
	"bytes"
	"encoding/binary"
)

const BUFFER_SIZE = 1024
const META_BYTES = 3

type bufferPointer struct {
	Position uint64
	Length   uint64
}

type MessageFrame struct {
	MessageLength  []byte
	MessageType    byte
	MessageData    bytes.Buffer
	IsComplete     bool
	MetaBytes      int
	BufferPointer  bufferPointer
	MetaDataFilled bool
}

func (messageFrame *MessageFrame) Reset() {
	messageFrame.IsComplete = false
	messageFrame.MessageData = bytes.Buffer{}
	messageFrame.MessageType = 0
	messageFrame.MetaBytes = 0
	messageFrame.MessageLength = make([]byte, 2)
}

func (messageFrame *MessageFrame) ParseMetaData() {
	// Parse Meta Data
}

func setMessageType(buffer *bytes.Buffer, msg_type byte) {
	buffer.Write([]byte{msg_type})

}


func setMessageLength(buffer *bytes.Buffer, msg []byte) {
	bs := make([]byte, 2)
	binary.LittleEndian.PutUint16(bs, uint16(len(msg)))
	buffer.Write(bs)
}

func setMessageData(buffer *bytes.Buffer, msg []byte) {
	buffer.Write([]byte(msg))
}

func generateFrameMetaData(buffer *bytes.Buffer, message_type byte, msg []byte) {

	setMessageType(buffer, message_type)
	setMessageLength(buffer, msg)
}

func generateFramePayload(buffer *bytes.Buffer, msg []byte) {
	setMessageData(buffer, msg)
}


// CreateFrame :Analyze  &  Creates Frame message:
// 	Formula:
//	   1 bytes (MessageType)
//	 + 2 bytes (MessageLength)
//	 + data->byteArray[].length
func CreateFrame(message_type byte, data []byte) *bytes.Buffer {
	buffer := bytes.Buffer{}
	generateFrameMetaData(&buffer, message_type, data)
	generateFramePayload(&buffer, data)
	return &buffer
}





