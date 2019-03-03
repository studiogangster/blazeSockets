package gameengine

import (
	"net"
	"fmt"
	"time"
	"blazesockets/InMemoryDB"
	"log"
)



var PING_INTERVAL = 1 * time.Second
var READ_TIMEOUT = 3 * time.Second
var MAX_RETRY_COUNT = 10

type GameEngine struct {
	Connection *net.Conn
	IsLive bool
	PingInterval time.Duration
	GameEngineAddress string
	RoomName string
	OnMessage func(message []byte)
	retryCount int

}

func  (it *GameEngine) SendData(message []byte) {
	//TODO	Make this worker
	log.Println("SENDMESSAGE", string(message))
	go (*it.Connection).Write(message)

}

//TODO CHeck thread safety
func  (it *GameEngine) Connect(reconnecting bool){


	if MAX_RETRY_COUNT <= it.retryCount{
		fmt.Println("MAX RETRY COUNT SURPASSED")
		InMemoryDB.GAMESERVER.Remove(it.RoomName)
		return
	} else{
		it.retryCount++
	}

	it.PingInterval =  PING_INTERVAL

	conn, err := net.Dial("tcp", it.GameEngineAddress)
	if err != nil{
		it.IsLive = false
		log.Println("SERVER NOT AVAILBLE ")
		log.Println("RECONNECTING")
		time.Sleep(PING_INTERVAL)
		it.Connect(true)
		return
	}

	log.Println("Connected to GameServer")

	it.IsLive = true
	//SERVER CONNECTED
	it.retryCount=0

	if !reconnecting{
		it.OnMessage = func(message []byte) {
			//channel.BroadcastInRoom( it.RoomName, message )
		}
	}



	it.Connection = &conn
	InMemoryDB.GAMESERVER.SetIfAbsent( it.RoomName , it )
	(*it.Connection).Write([]byte("HELLO") )

	buffer := make([]byte,  4096) // big buffer
	go func ()	{
	//			Read from socket
		for it.IsLive{
			conn.SetReadDeadline( time.Now().Add( READ_TIMEOUT ) )
			if n, err := conn.Read(buffer); err != nil{
				it.IsLive = false
				log.Println("READ TIMEOUT OCCURED ")
				log.Println("RECONNECTING")
				(*it.Connection).Close()
				it.Connect(true)
				break

			} else {
				it.OnMessage( buffer[:n] )
			}

		}
	//	Error occured, Time to reconnect
	}()

	var PING_FRAME = []byte("PING")
	//PINGER
	go func (){
		for  it.IsLive {
			conn.Write(PING_FRAME)
			time.Sleep(it.PingInterval)
		}
	}()



}

func GetGameEngine(roomName string, address string ) *GameEngine {

	gameServer , exists :=InMemoryDB.GAMESERVER.Get(roomName)
	if exists{
		return  gameServer.(*GameEngine)
	} else {
		return CreateGameEngine(roomName , address)
	}

}

func CreateGameEngine(roomName string, address string ) *GameEngine {

	gameEngine := &GameEngine{
		GameEngineAddress: address,
		RoomName:roomName,

	}


	gameEngine.Connect(false)
	return gameEngine


	//for {
	//
	//	gameRoom , err := InMemoryDB.GAMESERVER.Get(roomName)
	//	if err {
	//		gameRoom.(*GameEngine).SendData( []byte("HELLO FROM GO") )
	//	} else {
	//		fmt.Println("No such key found")
	//	}
	//	time.Sleep( 5 * time.Second )
	//}

	//go utils.CreateChannel(&conn, "client")
	//fmt.Println("Logging" , pName, "in..")
	//conn.Write( []byte(pName))
}


func SendMessageToGameEngine(roomName string, message []byte){
	gameServer , exists :=InMemoryDB.GAMESERVER.Get(roomName)
	if(exists){
		gameServer.(*GameEngine).SendData(message)
	}
}

//func main() {
//
//	CreateGameEngine("test", "localhost:7071" )
//
//}
