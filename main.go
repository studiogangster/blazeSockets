package main

import (
	"blazesockets/multiplayer/Server"
	"blazesockets/multiplayer/Serverconfig"
	"blazesockets/multiplayer/Voip"
	"log"
	"time"
	"blazesockets/multiplayer/Utils"
	"blazesockets/MessageCreator"
	"blazesockets/protoModels/models"
)

func PingPong(){

	for{

		var msg = messagecreator.CreateResponse( &proxy_proto_models.GameResponse{
			GameResponseType: proxy_proto_models.GameResponseType_SEND_MESSAGE_RESPONSE,
			Messsage: []byte("PingPong"),
			Success: true,
		} )
		utils.BroadCastSync(msg)
		time.Sleep( 2 * time.Second)
	}
}

func main() {

	go voip.UdpServer() // Start Audio Streaming Server

	configuration := &(serverconfig.ServerConfig{
		PORT:       "8080",
		EnableLogs: true,
	})

	server.Configure(configuration)

	//go PingPong()
	log.Println("PING")

	server.StartServer()



}
