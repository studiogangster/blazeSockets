package websockets

import (
	"bufio"
	"fmt"
	"net"
	"os"
	"testing"
	"time"
	"blazesockets/MessageCreator"
	socketModels "blazesockets/protoModels/models"
)

func createRoom() {
	time.Sleep(4 * time.Second)
	CreateRoom("test")
}

func input(action string) string {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print(action)
	text, _ := reader.ReadString('\n')
	return text
}

func send(conn *net.Conn, data string) {

}

func SendingClient(conn *net.Conn) {

	userName := input("Enter username to login")
	send(conn, userName)
}

func ReadingClient(conn net.Conn) {

	authToken := make([]byte, 100)
	for {
		conn.SetReadDeadline(time.Now().Add(3 * time.Second))
		bytesRead, _ := conn.Read(authToken)
		if bytesRead >= 3 {

			MESSAGE_TYPE := authToken[0]
			//MESSAGE_LENGTH := authToken[1:3]
			//MESSAGE_PAYLOAD := authToken[3:]

			//fmt.Println("PROTO", MESSAGE_TYPE, MESSAGE_PAYLOAD, MESSAGE_LENGTH)

			switch MESSAGE_TYPE {

			case 'M':
				//data := new(socketModels.MultiplayerHandshake)
				//proto.Unmarshal(MESSAGE_PAYLOAD, data)
				//fmt.Println(data)

			}

			fmt.Println(authToken[:bytesRead])
		}

	}

}


func connectToGameServer() {
	conn, _ := net.Dial("tcp", "127.0.0.1:8080")
	go ReadingClient(conn)

	msg := CreateFrame('A', []byte("Hello "))
	fmt.Fprintf(conn, string(msg.Bytes()))
	time.Sleep(2 * time.Second)
	for {



		fmt.Fprintf(conn, string(msg.Bytes()))
		fmt.Println("DATA SENT")
		// listen for reply
		time.Sleep(3 * time.Second)

		message := messagecreator.RoomCreate( &socketModels.RoomCreate{
			RoomToken: "roomToken",
			GameId: "gId",
			RoomId: "rId",
			RoomName: "rName",
			RoomSize: "10",
		} )


		message = messagecreator.RoomAddPlayer( &socketModels.RoomAddPlayer{
			RoomToken: "playerRoomToken",
		} )



		msg = CreateFrame('M', message)
		fmt.Fprintf(conn, string(msg.Bytes()))

		fmt.Println("DATA SENT")
		fmt.Println("DATA SENT")
		// listen for reply
		time.Sleep(3 * time.Second)
	}
}

func TestMultiplayerGame(t *testing.T) {
	connectToGameServer()
	go createRoom()
}
