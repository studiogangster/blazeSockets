package channel

import (
	memDb "blazesockets/InMemoryDB"
	"blazesockets/MessageHandler"
	wsLogs "blazesockets/logs"
	"blazesockets/multiplayer/MessageFrame"
	"encoding/binary"
	"fmt"
	"log"
	"net"
	"sync"
	"time"

	"github.com/gobwas/ws"
	"github.com/mailru/easygo/netpoll"
)

// Channel is a wrapper around websocket, that encapsulates a mutex(for locking), socketName, underlying connection, and fildescriptor associated with the socket.
type Channel struct {
	MessageFrame   messageframe.MessageFrame
	Engaged        bool
	Mutex          sync.RWMutex
	SocketName     string
	Conn           net.Conn // WebSocket connection
	FileDescriptor *netpoll.Desc
}

// TODO Handle Edge case for parallel execution and deadlock
// Channel.close() is used to gracefully close the connection, remove from the concurrent hashmap, remove from the nepoller queue, and finaly close the file descriptor associated with it.
func (channel *Channel) close() {
	fmt.Println("CLosing Socket")
	memDb.SOCKETS.Remove(channel.SocketName)
	// Not interested in any event from this socket, Remove from netpoll/epoll/kqueue
	memDb.Poller.Stop(channel.FileDescriptor)
	// Close the socket connection
	channel.Conn.Close()
	// Remove the file descriptor associated with that socket
	channel.FileDescriptor.Close()
	log.Println(wsLogs.WS_SERVER_LOGS, channel.SocketName)
	return
}

func (channel *Channel) ReadMessageFrame() {
	channel.newParseFrame()

}

func (channel *Channel) newParseFrame() {
	// Buffer to read from tcp socket directly

	buffer := make([]byte, 100)
	for {

		// channel.conn.SetReadDeadline(time.Now().Add(1 * time.Second))
		channel.Conn.SetReadDeadline(time.Now().Add(time.Millisecond * 300))
		// Read from TCP_BUFFER to buffer
		bytes_read, err := channel.Conn.Read(buffer)

		if err != nil {

			memDb.Poller.Resume(channel.FileDescriptor)
			// fmt.Println("Message EOF / TimeOut", err)
			return
		}

		if bytes_read == 0 {
			memDb.Poller.Resume(channel.FileDescriptor)
			//fmt.Println("No Bytes Left To Read")
			return
		}
		// fmt.Println("NewBytes Read ", bytes_read , buffer)
		channel.MessageFrame.MessageData.Write(buffer[:bytes_read])
		// TODO: Explain this
		for {

			// Check if meta data is even filled or not (Return and wait for more bytes, until it is complete)
			if channel.MessageFrame.MessageData.Len() < messageframe.META_BYTES {

				break
			}

			// Check if metadata parsing is required (new frame) / or not (old frame with pre filled meta data)
			if channel.MessageFrame.MetaDataFilled == false {
				// This ssegment will be reached, when meta data is not complete, and it can be completed as we have the required number of meta bytes
				channel.MessageFrame.MessageType, _ = channel.MessageFrame.MessageData.ReadByte()
				channel.MessageFrame.MessageData.Read(channel.MessageFrame.MessageLength)
				channel.MessageFrame.MetaDataFilled = true

			} else {
				// This segment will be reached when the meta data iscomplete, and mesagedata contains atleast one complete data frame, and may be more than 1 or partial *data & metadata* frame
				// TODO: Parse all those frames

				if channel.MessageFrame.MessageData.Len() < int(binary.LittleEndian.Uint16(channel.MessageFrame.MessageLength)) {
					// The message data frame is not complete yet
					// fmt.Println("The message data frame is not complete yet", int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength)) )
					break
				} else if channel.MessageFrame.MessageData.Len() == int(binary.LittleEndian.Uint16(channel.MessageFrame.MessageLength)) {
					// The message data frame matches exactly with the required length of it
					// Pluch the message buffer by reading complete & Reset the MetaFlag
					MESSAGE_DATA_FRAME := make([]byte, int(binary.LittleEndian.Uint16(channel.MessageFrame.MessageLength)))
					MessageType := channel.MessageFrame.MessageType

					channel.MessageFrame.MessageData.Read(MESSAGE_DATA_FRAME)
					// fmt.Println("MESSAGE_DATA_FRAME = ", MESSAGE_DATA_FRAME)
					channel.MessageFrame.MetaDataFilled = false

					MessageParser(MessageType, MESSAGE_DATA_FRAME)

					// fmt.Println("*MESSAGE*", string(MESSAGE_DATA_FRAME))
				} else {
					// The message data contains atleast one, or more than message frames
					MESSAGE_DATA_FRAME := make([]byte, int(binary.LittleEndian.Uint16(channel.MessageFrame.MessageLength)))
					MessageType := channel.MessageFrame.MessageType
					channel.MessageFrame.MessageData.Read(MESSAGE_DATA_FRAME)
					// fmt.Println("MESSAGE_DATA_FRAME > ", int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength)))
					channel.MessageFrame.MetaDataFilled = false
					MessageParser(MessageType, MESSAGE_DATA_FRAME)
				}

			}

		}

		// Assign the data in channel.MessageFrame: 1st Three Bytes in metaData, and every remaining thing in frameData
		// extractBuffer(channel, bytes_read, buffer)

	}
}


// Channel.pause() is used to stop listening  connection, remove from the concurrent hashmap, remove from the nepoller queue, and finaly close the file descriptor associated with it.
func (channel *Channel) pause() {

	return
}

func (channel *Channel) reader() {
	for {
		b := make([]byte, 100)
		channel.Conn.Read(b)
	}
}

// Writer is used to push websocket frame through the socket
func (channel *Channel) writer(wsFrame ws.Frame) {

	err := ws.WriteFrame(channel.Conn, wsFrame)
	if err != nil {
		log.Println(wsLogs.WS_CLIENT_LOGS, ":", channel.SocketName, "Coudn't write websocket frame to socket", "Error:", err)
		return

	}
}


//Public Functions
// Writer is used to push websocket frame through the socket
func (channel *Channel) Write(wsFrame ws.Frame) {
	channel.writer(wsFrame)
}

func (channel *Channel)  Close() {
	fmt.Println("CLosing Socket")
	channel.close()
}


func (channel *Channel)  extractBuffer( bytes_read int, buffer []byte) {
	if bytes_read <= 0 {
		return
	}
	// If bytes_read is greater than 0
	fmt.Println("META BYTES", channel.MessageFrame.MetaBytes)
	if channel.MessageFrame.MetaBytes >= 3 {
		fmt.Println("META DATA COMPLETE")
		// Meta data is complete, So JUST WRITE TO MESSAGE BUFFER
		channel.MessageFrame.MessageData.Write(buffer)

		// TODO: If buffer has extra partial message(s), Handle Them
		// messageLength := int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength))

	} else if channel.MessageFrame.MetaBytes == 1 {
		// Message Type is Complete, So Try to COMPLETE MESSAGE LENGTH, & FILL MESSAGE BUFFER

		switch bytes_read {
		case 1:
			copy(channel.MessageFrame.MessageLength[0:1], buffer[0:1])
			break
		case 2:
			copy(channel.MessageFrame.MessageLength, buffer)
			break
		default:
			copy(channel.MessageFrame.MessageLength, buffer[:2])
			channel.MessageFrame.MessageData.Write(buffer[2:])
			break
		}

	} else if channel.MessageFrame.MetaBytes == 2 {
		// Message Type Is Complete and Message Length Is Partial (Half Filled [2]byte ), So Try to COMPLETE MESSAGE LENGTH & FILL MESSAGE BUFFER  & MESSAGE DATA
		switch bytes_read {
		case 1:
			copy(channel.MessageFrame.MessageLength[0:1], buffer[0:1])
			break

		default:
			copy(channel.MessageFrame.MessageLength[0:1], buffer[0:1])
			channel.MessageFrame.MessageData.Write(buffer[1:])
			break

		}
	} else if channel.MessageFrame.MetaBytes == 0 {
		//Message Type is incomplete && Message Length is Empty, Try to COMPLETE MESSAGE LENGTH, & FILL MESSAGE BUFFER & MESSAGE DATA

		switch bytes_read {
		case 1:
			channel.MessageFrame.MessageType = buffer[0]
			break

		case 2:
			channel.MessageFrame.MessageType = buffer[0]
			copy(channel.MessageFrame.MessageLength[0:1], buffer[1:2])
			break
		case 3:
			channel.MessageFrame.MessageType = buffer[0]
			copy(channel.MessageFrame.MessageLength, buffer[1:3])
			break

		default:
			channel.MessageFrame.MessageType = buffer[0]
			channel.MessageFrame.MessageLength = buffer[1:3]
			copy(channel.MessageFrame.MessageLength, buffer[1:3])
			channel.MessageFrame.MessageData.Write(buffer[3:])
			break
		}
	}

	// Check if message is complete, and handle appropriately
	if channel.MessageFrame.MetaBytes <= 3 {
		channel.MessageFrame.MetaBytes += (bytes_read)
		channel.MessageFrame.MetaBytes = min(channel.MessageFrame.MetaBytes, 4)
		// channel.messageFrame.MetaBytes %= 5
	}

	// Check if message is complete and has to be read or discarded
	fmt.Println("MESSAGE LENGTH", (channel.MessageFrame.MessageLength))
	if channel.MessageFrame.MetaBytes >= 3 {
		// Meta Bytes are present
		// Check if message buffer's size is equal or greater than expected frame size
		messageLength := int(binary.LittleEndian.Uint16(channel.MessageFrame.MessageLength))
		if messageLength <= (channel.MessageFrame.MessageData.Len()) {

			// Yes Expected  Message Frame is Complete...Read it is buffer and pass it to the concerned coroutine
			messageFrameBuffer := make([]byte, messageLength)
			channel.MessageFrame.MessageData.Read(messageFrameBuffer)
			// Handle the message Frame
			fmt.Println("MESSAGE FRAME SUCCESS Primary", string(messageFrameBuffer))
			// Reset the meta bytes
			channel.MessageFrame.MetaBytes = 0

			// Handle Rest of the incomplete Message
			bytes_read = channel.MessageFrame.MessageData.Len()

			for {
				n, err := channel.MessageFrame.MessageData.Read(buffer)
				if err != nil {
					fmt.Println("NO MORE SECONDARY MESSAGES LEFT")
					break
				} else {
					fmt.Println(n, "MORE SECONDARY MESSAGES LEFT")
				}
				fmt.Println("READING SECONDARY MESSAGES FROM message_data BUFFER")
				fmt.Println(buffer)
				channel.extractBuffer( n, buffer)
			}

		} else {
			fmt.Println("MESSAGE TYPE", string(channel.MessageFrame.MessageType))
			fmt.Println("MESSAGE IS INCOMPLETE BY", messageLength, messageLength-channel.MessageFrame.MessageData.Len())
		}
	} else {
		// Meta Bytes are incomplete, just keep adding to buffer
		fmt.Println("MESSAGE META DATA IS INCOMPLETE")
	}
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func (channel *Channel)  extractBufferFromMessageData(){
	fmt.Println("META BYTES", channel.MessageFrame.MetaBytes)
	buffer := make([]byte, 1)
	for {

		bytes_read, err := channel.MessageFrame.MessageData.Read(buffer)
		if err != nil {
			fmt.Println("MessageData Buffer : Empty")
		}

		fmt.Println("META BYTES", channel.MessageFrame.MetaBytes)
		if channel.MessageFrame.MetaBytes >= 3 {
			fmt.Println("META DATA COMPLETE")
			// Meta data is complete, So JUST WRITE TO MESSAGE BUFFER
			channel.MessageFrame.MessageData.Write(buffer)

			// TODO: If buffer has extra partial message(s), Handle Them
			// messageLength := int(binary.LittleEndian.Uint16(channel.messageFrame.MessageLength))

		} else if channel.MessageFrame.MetaBytes == 1 {
			// Message Type is Complete, So Try to COMPLETE MESSAGE LENGTH, & FILL MESSAGE BUFFER

			switch bytes_read {
			case 1:
				copy(channel.MessageFrame.MessageLength[0:1], buffer[0:1])
				break
			case 2:
				copy(channel.MessageFrame.MessageLength, buffer)
				break
			default:
				copy(channel.MessageFrame.MessageLength, buffer[:2])
				channel.MessageFrame.MessageData.Write(buffer[2:])
				break
			}

		} else if channel.MessageFrame.MetaBytes == 2 {
			// Message Type Is Complete and Message Length Is Partial (Half Filled [2]byte ), So Try to COMPLETE MESSAGE LENGTH & FILL MESSAGE BUFFER  & MESSAGE DATA
			switch bytes_read {
			case 1:
				copy(channel.MessageFrame.MessageLength[0:1], buffer[0:1])
				break

			default:
				copy(channel.MessageFrame.MessageLength[0:1], buffer[0:1])
				channel.MessageFrame.MessageData.Write(buffer[1:])
				break

			}
		} else if channel.MessageFrame.MetaBytes == 0 {
			//Message Type is incomplete && Message Length is Empty, Try to COMPLETE MESSAGE LENGTH, & FILL MESSAGE BUFFER & MESSAGE DATA

			switch bytes_read {
			case 1:
				channel.MessageFrame.MessageType = buffer[0]
				break

			case 2:
				channel.MessageFrame.MessageType = buffer[0]
				copy(channel.MessageFrame.MessageLength[0:1], buffer[1:2])
				break
			case 3:
				channel.MessageFrame.MessageType = buffer[0]
				copy(channel.MessageFrame.MessageLength, buffer[1:3])
				break

			default:
				channel.MessageFrame.MessageType = buffer[0]
				channel.MessageFrame.MessageLength = buffer[1:3]
				copy(channel.MessageFrame.MessageLength, buffer[1:3])
				channel.MessageFrame.MessageData.Write(buffer[3:])
				break
			}
		}

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
		msg := messageframer.ParseMultiplayerModel(message)
		messageframer.HandleMultiplayerMessage(msg)
		fmt.Println("Multiplayer", string(message))
		// data := new(socketModels.MultiplayerHandshake)
		// proto.Unmarshal(message, data)
		// fmt.Println(data)
		break

	default:

	}

}