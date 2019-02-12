package main

import (
	"blazesockets/MessageCreator"
	"blazesockets/multiplayer/MessageFrame"
	"blazesockets/multiplayer/Room"
	"bufio"
	"fmt"
	"net"
	"os"
	"strings"
	"time"

	socketModels "blazesockets/protoModels/models"
)

var conn net.Conn

var Inputs = map[string]string{
	"1": "Create a room",
	"2": "Join a room",
	"3": "Get player in rooms",
	"4": "Get list of rooms",
}

var Handlers = map[string]interface{}{
	"1":  createRoom,
}

func createRoom(){
	roomName := input("Room name to join?\n")
	fmt.Println("Joining", roomName, "room")

	message := messagecreator.RoomCreate(  &socketModels.RoomCreate{
		RoomName: roomName,
		RoomSize: "5",
		RoomId: "1",
		GameId:"2",
		RoomToken: "roomToken",
		RoomTTL: "12",
	} )

	sent, err := conn.Write(message)
	fmt.Println(sent, err)



}







func Setup(){

	playerName := input("Enter playername\n")
	connectToGameServer(playerName)

	for {

		for Input := range Inputs{
			fmt.Println(Input, Inputs[Input])

		}
		Inp := input("")
		fmt.Println("Choose", Inp,Handlers[ Inp])

		Handlers[Inp].(func())()

	}
}




func getRooms(){
	rooms := Room.GetRoomNames()
	for room := range rooms{
		fmt.Println("Room", room)
	}
}

func input(action string) string {
	reader := bufio.NewReader(os.Stdin)
	fmt.Print(action)
	text, _ := reader.ReadString('\n')
	return  strings.Trim(text, "\n")
}

func send(conn *net.Conn, data string) {

}

func Login(conn net.Conn) {

	userName := input("Enter username to login")
	send(&conn, userName)
}

func ReadingClient(conn net.Conn) {


	Login(conn)

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


				conn.Write( messagecreator.RoomGetPlayers( &socketModels.RoomGetPlayers{
					RoomName:"test",
				}  )  )



				break

				//data :=
				//proto.Unmarshal(MESSAGE_PAYLOAD, data)
				//fmt.Println(data)

			}

			fmt.Println(authToken[:bytesRead])
		}

	}

}


func connectToGameServer(pName string) {
	conn, _ = net.Dial("tcp", "127.0.0.1:8080")

	fmt.Println("Logging" , pName, "in..")
	conn.Write( []byte(pName))


}

func ConnectToGameServer(pName string) {
	conn, _ := net.Dial("tcp", "127.0.0.1:8080")
	go ReadingClient(conn)

	msg := messageframe.CreateFrame('A', []byte( pName))
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



		msg = messageframe.CreateFrame('M', message)
		fmt.Fprintf(conn, string(msg.Bytes()))

		fmt.Println("DATA SENT")
		fmt.Println("DATA SENT")
		// listen for reply
		time.Sleep(3 * time.Second)
	}
}

func main() {

	Setup()
	//connectToGameServer()
	//go createRoom()
}
