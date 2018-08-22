package websockets

import (
	"bytes"
	"encoding/binary"
	"fmt"
	"math"
	"time"
)

const BUFFER_SIZE = 1024

type MessageFrame struct {
	MessageLength []byte
	MessageType   byte
	MessageData   bytes.Buffer
	IsComplete    bool
	MetaBytes     int
}

func (messageFrame *MessageFrame) Reset() {
	messageFrame.IsComplete = false
	messageFrame.MessageData = bytes.Buffer{}
	messageFrame.MessageType = 0
	messageFrame.MetaBytes = 0
	messageFrame.MessageLength = make([]byte, 2)
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
func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func extractBuffer(channel *Channel, bytes_read int, buffer []byte) {

	// If bytes_read is greater than 0
	fmt.Println("META BYTES", channel.messageFrame.MetaBytes)
	if channel.messageFrame.MetaBytes >= 3 {
		fmt.Println("META DATA COMPLETE")
		// Meta data is complete, So JUST WRITE TO MESSAGE BUFFER
		channel.messageFrame.MessageData.Write(buffer)

		// TODO: If buffer has extra partial message(s), Handle Them
		messageLength := int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength))
		math.Min(messageLength, channel.messageFrame.MessageLength)

	} else if channel.messageFrame.MetaBytes == 1 {
		// Message Type is Complete, So Try to COMPLETE MESSAGE LENGTH, & FILL MESSAGE BUFFER

		switch bytes_read {
		case 1:
			copy(channel.messageFrame.MessageLength[0:1], buffer[0:1])
			break
		case 2:
			copy(channel.messageFrame.MessageLength, buffer)
			break
		default:
			copy(channel.messageFrame.MessageLength, buffer[:2])
			channel.messageFrame.MessageData.Write(buffer[2:])
			break
		}

	} else if channel.messageFrame.MetaBytes == 2 {
		// Message Type Is Complete and Message Length Is Partial (Half Filled [2]byte ), So Try to COMPLETE MESSAGE LENGTH & FILL MESSAGE BUFFER  & MESSAGE DATA
		switch bytes_read {
		case 1:
			copy(channel.messageFrame.MessageLength[0:1], buffer[0:1])
			break

		default:
			copy(channel.messageFrame.MessageLength[0:1], buffer[0:1])
			channel.messageFrame.MessageData.Write(buffer[1:])
			break

		}
	} else if channel.messageFrame.MetaBytes == 0 {
		//Message Type is incomplete && Message Length is Empty, Try to COMPLETE MESSAGE LENGTH, & FILL MESSAGE BUFFER & MESSAGE DATA

		switch bytes_read {
		case 1:
			channel.messageFrame.MessageType = buffer[0]
			break

		case 2:
			channel.messageFrame.MessageType = buffer[0]
			copy(channel.messageFrame.MessageLength[0:1], buffer[1:2])
			break
		case 3:
			channel.messageFrame.MessageType = buffer[0]
			copy(channel.messageFrame.MessageLength, buffer[1:3])
			break

		default:
			channel.messageFrame.MessageType = buffer[0]
			channel.messageFrame.MessageLength = buffer[1:3]
			copy(channel.messageFrame.MessageLength, buffer[1:3])
			channel.messageFrame.MessageData.Write(buffer[3:])
			break
		}
	}
}

func ParseFrame(channel *Channel) {

	buffer := make([]byte, 2)
	for {
		time.Sleep(300 * time.Millisecond)

		// channel.conn.SetReadDeadline(time.Now().Add(1 * time.Second))
		channel.conn.SetReadDeadline(time.Now().Add(time.Millisecond * 300))
		bytes_read, err := channel.conn.Read(buffer)

		if err != nil {
			fmt.Println("Message EOF / TimeOut")
			return
		}

		extractBuffer(channel, bytes_read, buffer)

		if channel.messageFrame.MetaBytes <= 3 {
			channel.messageFrame.MetaBytes += (bytes_read)
			channel.messageFrame.MetaBytes = min(channel.messageFrame.MetaBytes, 4)
			// channel.messageFrame.MetaBytes %= 5
		}

		// Check if message id complete and has to be read or discarded
		fmt.Println("MESSAGE LENGTH", (channel.messageFrame.MessageLength))
		if channel.messageFrame.MetaBytes >= 3 {
			// Meta Bytes are present
			// Check if message buffer's size is equal or greater than expected frame size
			messageLength := int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength))
			if messageLength <= (channel.messageFrame.MessageData.Len()) {

				// Yes Expected  Message Frame is Complete...Read it is buffer and pass it to the concerned coroutine
				messageFrameBuffer := make([]byte, messageLength)
				channel.messageFrame.MessageData.Read(messageFrameBuffer)
				// Handle the message Frame
				fmt.Println("MESSAGE FRAME SUCCESS", string(messageFrameBuffer))
				channel.messageFrame.MetaBytes = 0

				// Handle Rest of the incomplete Message
				bytes_read = channel.messageFrame.MessageData.Len()
				time.Sleep(4 * time.Second)
				extractBuffer(channel, bytes_read, buffer)

			} else {
				fmt.Println("MESSAGE TYPE", string(channel.messageFrame.MessageType))
				fmt.Println("MESSAGE IS INCOMPLETE BY", messageLength, messageLength-channel.messageFrame.MessageData.Len())
			}
		} else {
			// Meta Bytes are incomplete, just keep adding to buffer
			fmt.Println("MESSAGE META DATA IS INCOMPLETE")
		}

	}

}
