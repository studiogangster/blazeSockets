package websockets

import (
	"bytes"
	"fmt"
	"io"
)

func setMessageType(buffer *bytes.Buffer, msg_type string) {
	buffer.Write([]byte(msg_type))

}

func setMessageLength(buffer *bytes.Buffer, msg string) {
	buffer.Write([]byte("20"))
}

func setMessageData(buffer *bytes.Buffer, msg string) {
	buffer.Write([]byte(msg))
}

func generateFrameMetaData(buffer *bytes.Buffer, msg string) {

	setMessageType(buffer, "M")
	setMessageLength(buffer, msg)
}

func generateFramePayload(buffer *bytes.Buffer, msg string) {
	setMessageData(buffer, msg)
}

// CreateFrame :Analyze  &  Creates Frame message:
// 	Formula:
//	   1 bytes (MessageType)
//	 + 2 bytes (MessageLength)
//	 + data->byteArray[].length
func CreateFrame(data string) bytes.Buffer {

	buffer := bytes.Buffer{}
	generateFrameMetaData(&buffer, data)
	generateFramePayload(&buffer, data)

	return buffer

}

func ParseFrame(reader io.Reader) string {

	buffer := make([]byte, 2)

	reader.Read(buffer[:1])
	message_type := string(buffer[:1])

	fmt.Println("message_type", message_type)
	reader.Read(buffer)
	message_length := string(buffer)
	fmt.Println("message_length", message_length)
	return "HELLO"

}
