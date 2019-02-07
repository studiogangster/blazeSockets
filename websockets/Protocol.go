package websockets

import (
	messageHandler "blazesockets/MessageHandler"
	"bytes"
	"encoding/binary"
	"fmt"
	"time"
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

func ReadMessageFrame(channel *Channel) {

	NewParseFrame(channel)

}

func _ReadMessageFrame(channel *Channel) {

	// channel.messageFrame = ParseFrame(channel.conn)
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
func CreateFrame(message_type byte, data []byte) bytes.Buffer {
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

func extractBufferFromMessageData(channel *Channel) {
	fmt.Println("META BYTES", channel.messageFrame.MetaBytes)
	buffer := make([]byte, 1)
	for {

		bytes_read, err := channel.messageFrame.MessageData.Read(buffer)
		if err != nil {
			fmt.Println("MessageData Buffer : Empty")
		}

		fmt.Println("META BYTES", channel.messageFrame.MetaBytes)
		if channel.messageFrame.MetaBytes >= 3 {
			fmt.Println("META DATA COMPLETE")
			// Meta data is complete, So JUST WRITE TO MESSAGE BUFFER
			channel.messageFrame.MessageData.Write(buffer)

			// TODO: If buffer has extra partial message(s), Handle Them
			// messageLength := int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength))

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
}

func extractBuffer(channel *Channel, bytes_read int, buffer []byte) {
	if bytes_read <= 0 {
		return
	}
	// If bytes_read is greater than 0
	fmt.Println("META BYTES", channel.messageFrame.MetaBytes)
	if channel.messageFrame.MetaBytes >= 3 {
		fmt.Println("META DATA COMPLETE")
		// Meta data is complete, So JUST WRITE TO MESSAGE BUFFER
		channel.messageFrame.MessageData.Write(buffer)

		// TODO: If buffer has extra partial message(s), Handle Them
		// messageLength := int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength))

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

	// Check if message is complete, and handle appropriately
	if channel.messageFrame.MetaBytes <= 3 {
		channel.messageFrame.MetaBytes += (bytes_read)
		channel.messageFrame.MetaBytes = min(channel.messageFrame.MetaBytes, 4)
		// channel.messageFrame.MetaBytes %= 5
	}

	// Check if message is complete and has to be read or discarded
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
			fmt.Println("MESSAGE FRAME SUCCESS Primary", string(messageFrameBuffer))
			// Reset the meta bytes
			channel.messageFrame.MetaBytes = 0

			// Handle Rest of the incomplete Message
			bytes_read = channel.messageFrame.MessageData.Len()

			for {
				n, err := channel.messageFrame.MessageData.Read(buffer)
				if err != nil {
					fmt.Println("NO MORE SECONDARY MESSAGES LEFT")
					break
				} else {
					fmt.Println(n, "MORE SECONDARY MESSAGES LEFT")
				}
				fmt.Println("READING SECONDARY MESSAGES FROM message_data BUFFER")
				fmt.Println(buffer)
				extractBuffer(channel, n, buffer)
			}

		} else {
			fmt.Println("MESSAGE TYPE", string(channel.messageFrame.MessageType))
			fmt.Println("MESSAGE IS INCOMPLETE BY", messageLength, messageLength-channel.messageFrame.MessageData.Len())
		}
	} else {
		// Meta Bytes are incomplete, just keep adding to buffer
		fmt.Println("MESSAGE META DATA IS INCOMPLETE")
	}
}

// The place to parse the message recieved from the client
func MessageParser(MessageType byte, message []byte) {
	//fmt.Println("*MESSAGE*" , string(MessageType), string(message))

	defer func() {
		if r := recover(); r != nil {
			fmt.Println("MessageParser Failed", r)
		}
	}()

	switch MessageType {

	case 'A':
		// Handle Authentication Event
		log.Println("Authentication", string(message))
		break

	case 'M':
		// Handle multiplayer Events
		//log.Println("Multiplayer", string(message))
		msg := messageHandler.ParseMultiplayerModel(message)
		messageHandler.HandleMultiplayerMessage(msg)
		fmt.Println("Multiplayer", string(message))
		// data := new(socketModels.MultiplayerHandshake)
		// proto.Unmarshal(message, data)
		// fmt.Println(data)
		break

	default:

	}

}

func NewParseFrame(channel *Channel) {
	// Buffer to read from tcp socket directly

	buffer := make([]byte, 100)
	for {

		// channel.conn.SetReadDeadline(time.Now().Add(1 * time.Second))
		channel.conn.SetReadDeadline(time.Now().Add(time.Millisecond * 300))
		// Read from TCP_BUFFER to buffer
		bytes_read, err := channel.conn.Read(buffer)

		if err != nil {

			poller.Resume(channel.fileDescriptor)
			// fmt.Println("Message EOF / TimeOut", err)
			return
		}

		if bytes_read == 0 {
			poller.Resume(channel.fileDescriptor)
			//fmt.Println("No Bytes Left To Read")
			return
		}
		// fmt.Println("NewBytes Read ", bytes_read , buffer)
		channel.messageFrame.MessageData.Write(buffer[:bytes_read])
		// TODO: Explain this
		for {

			// Check if meta data is even filled or not (Return and wait for more bytes, until it is complete)
			if channel.messageFrame.MessageData.Len() < META_BYTES {

				break
			}

			// Check if metadata parsing is required (new frame) / or not (old frame with pre filled meta data)
			if channel.messageFrame.MetaDataFilled == false {
				// This ssegment will be reached, when meta data is not complete, and it can be completed as we have the required number of meta bytes
				channel.messageFrame.MessageType, _ = channel.messageFrame.MessageData.ReadByte()
				channel.messageFrame.MessageData.Read(channel.messageFrame.MessageLength)
				channel.messageFrame.MetaDataFilled = true

			} else {
				// This segment will be reached when the meta data iscomplete, and mesagedata contains atleast one complete data frame, and may be more than 1 or partial *data & metadata* frame
				// TODO: Parse all those frames

				if channel.messageFrame.MessageData.Len() < int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength)) {
					// The message data frame is not complete yet
					// fmt.Println("The message data frame is not complete yet", int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength)) )
					break
				} else if channel.messageFrame.MessageData.Len() == int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength)) {
					// The message data frame matches exactly with the required length of it
					// Pluch the message buffer by reading complete & Reset the MetaFlag
					MESSAGE_DATA_FRAME := make([]byte, int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength)))
					MessageType := channel.messageFrame.MessageType

					channel.messageFrame.MessageData.Read(MESSAGE_DATA_FRAME)
					// fmt.Println("MESSAGE_DATA_FRAME = ", MESSAGE_DATA_FRAME)
					channel.messageFrame.MetaDataFilled = false

					MessageParser(MessageType, MESSAGE_DATA_FRAME)

					// fmt.Println("*MESSAGE*", string(MESSAGE_DATA_FRAME))
				} else {
					// The message data contains atleast one, or more than message frames
					MESSAGE_DATA_FRAME := make([]byte, int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength)))
					MessageType := channel.messageFrame.MessageType
					channel.messageFrame.MessageData.Read(MESSAGE_DATA_FRAME)
					// fmt.Println("MESSAGE_DATA_FRAME > ", int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength)))
					channel.messageFrame.MetaDataFilled = false

					MessageParser(MessageType, MESSAGE_DATA_FRAME)
				}

			}

		}

		// Assign the data in channel.MessageFrame: 1st Three Bytes in metaData, and every remaining thing in frameData
		// extractBuffer(channel, bytes_read, buffer)

	}
}
