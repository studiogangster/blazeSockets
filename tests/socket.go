package main

import (
	"blazesockets/MessageCreator"
	"blazesockets/multiplayer/Utils"
	"bufio"
	"fmt"
	"net"
	"os"
	"strings"

	socketModels "blazesockets/protoModels/models"
)

var conn net.Conn

var Inputs = map[string]string{
	"1": "Create a room",
	"2": "Join a room",
	"6": "Leave a room",
	"3": "Get player in rooms",
	"4": "Get list of rooms",
	"5": "Send Message",
}

var Handlers = map[string]interface{}{
	"1":  createRoom,
	"2":  joinRoom,
	"6":  leaveRoom,
	"3":  getPlayersInRoom,
	"4":  getRooms,
	"5":  sendMessage,

}


func sendMessage(){
	message := input("Message to send?\n")


	msg := messagecreator.CreateRequest(  &socketModels.GameRequest{
		GameRequestType: socketModels.GameRequestType_SEND_MESSAGE_REQUEST,
		Messsage: []byte(message),
	} )

	sent, err := conn.Write(msg)
	fmt.Println(sent, err)

}

func createRoom(){
	roomName := input("Room name to create?\n")


	message := messagecreator.CreateRequest(  &socketModels.GameRequest{
		GameRequestType: socketModels.GameRequestType_CREATE_ROOM_REQUEST,
		Messsage: []byte(roomName),
	} )

	sent, err := conn.Write(message)
	fmt.Println(sent, err)

}

func joinRoom(){
	roomName := input("Room name to join?\n")


	message := messagecreator.CreateRequest(  &socketModels.GameRequest{
		GameRequestType: socketModels.GameRequestType_JOIN_ROOM_REQUEST,
		Messsage: []byte(roomName),
	} )

	sent, err := conn.Write(message)
	fmt.Println(sent, err)
}
func leaveRoom(){


	message := messagecreator.CreateRequest(  &socketModels.GameRequest{
		GameRequestType: socketModels.GameRequestType_LEAVE_ROOM_REQUEST,
		Messsage: []byte("I want to leave"),
	} )

	sent, err := conn.Write(message)
	fmt.Println(sent, err)
}
func getRooms(){


	message := messagecreator.CreateRequest(  &socketModels.GameRequest{
		GameRequestType: socketModels.GameRequestType_GET_ROOMS_REQUEST,
		Messsage: []byte("pop"),
	} )


	sent, err := conn.Write(message)

	fmt.Println(sent, err)
}

func getPlayersInRoom(){
	roomName := input("Room name to query for players?\n")


	message := messagecreator.CreateRequest(  &socketModels.GameRequest{
		GameRequestType: socketModels.GameRequestType_GET_ROOM_DETAILS_REQUEST,
		Messsage: []byte(roomName),
	} )

	sent, err := conn.Write(message)
	fmt.Println(sent, err)
}



func Setup(){

	playerName := input("Enter playername?\n")
	connectToGameServer(playerName)

	for {

		for Input := range Inputs{
			fmt.Println(Input, Inputs[Input])

		}
		Inp := input("")
		fmt.Println("INOUT", Inp)
		Handlers[Inp].(func())()

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



func connectToGameServer(pName string) {
	conn, _ = net.Dial("tcp", "127.0.0.1:8080")

	go utils.CreateChannel(&conn, "client")

	fmt.Println("Logging" , pName, "in..")
	conn.Write( []byte(pName))


}

func main() {

	Setup()
	//connectToGameServer()
	//go createRoom()
}
