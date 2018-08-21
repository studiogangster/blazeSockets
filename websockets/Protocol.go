package websockets

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"time"
)

const BUFFER_SIZE = 1024

type MessageFrame struct {
	MessageType   byte
	MessageLength uint16
	MessageData   bytes.Buffer
	IsComplete    bool
}

func (messageFrame *MessageFrame) Reset() {
	messageFrame.IsComplete = false
	messageFrame.MessageData.Reset()
	messageFrame.MessageType = 0
	messageFrame.MessageLength = 0
}

func setMessageType(buffer *bytes.Buffer, msg_type byte) {
	buffer.Write([]byte{msg_type})

}

func ReadMessageFrame(channel *Channel) {

	ParseFrame(channel)

}

func _ReadMessageFrame(channel *Channel) {

	// channel.messageFrame = ParseFrame(channel.conn)
}

func setMessageLength(buffer *bytes.Buffer, msg string) {
	bs := make([]byte, 2)
	binary.LittleEndian.PutUint16(bs, uint16(len(msg)))
	buffer.Write(bs)
}

func setMessageData(buffer *bytes.Buffer, msg string) {
	buffer.Write([]byte(msg))
}

func generateFrameMetaData(buffer *bytes.Buffer, message_type byte, msg string) {

	setMessageType(buffer, message_type)
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
func CreateFrame(message_type byte, data string) bytes.Buffer {

	buffer := bytes.Buffer{}
	generateFrameMetaData(&buffer, message_type, data)
	generateFramePayload(&buffer, data)

	return buffer

}

func ParseFrame(channel *Channel) {
	fmt.Println("Parsig Frame")

	pointer := 0
	// Is metadata of message yet read ?
	metaDataRead := false
	buffer := make([]byte, 3)
	nothingToRead := false
	for {

		// channel.conn.SetReadDeadline(time.Now().Add(1 * time.Second))
		channel.conn.SetReadDeadline(time.Now().Add(time.Millisecond * 300))
		bytes_read, err := channel.conn.Read(buffer)
		fmt.Println("Bytes Read", bytes_read)
		fmt.Println("Bytes  Error", err)
		if len(buffer) == bytes_read {
			pointer += bytes_read
			// Exact n bytes were Read
		} else if len(buffer) > bytes_read {

			pointer += bytes_read
			nothingToRead = true
			// Lesser Bytes Were Read
		} else if bytes_read == 0 {
			pointer += 0
			// No Bytes Read // Break the wait loop
		}

		if metaDataRead == false {

			metaDataRead = true
			channel.messageFrame.MessageType = buffer[0]
			channel.messageFrame.MessageLength = binary.LittleEndian.Uint16(buffer[1:3])
			channel.messageFrame.MessageData.Write(buffer[3:])
			fmt.Println("MessageLength", channel.messageFrame.MessageLength)
			fmt.Println("MessageType", channel.messageFrame.MessageType)
			fmt.Println("MessageData", string(channel.messageFrame.MessageData.Bytes()))
			continue
		} else {
			// We have the metadata
			channel.messageFrame.MessageData.Write(buffer[:bytes_read])
			fmt.Println("MessageData", string(channel.messageFrame.MessageData.Bytes()))
		}

		if nothingToRead {
			fmt.Println("Nothing to read")
			break
		}

	}
	if channel.messageFrame.MessageData.Len() >= int(channel.messageFrame.MessageLength) {
		fmt.Println("Message Is Complete")
		fmt.Println(channel.messageFrame)
		channel.messageFrame.Reset()

	} else {
		fmt.Println("MESSAGE LENGTH EXP", (channel.messageFrame.MessageLength))
		fmt.Println("MESSAGE LENGTH ACT", channel.messageFrame.MessageData.Len())
	}

}
