package servicediscovery

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"blazesockets/servicediscovery/request"
	"blazesockets/multiplayer/Room"
	"log"
	"blazesockets/InMemoryDB"
	"blazesockets/multiplayer/GameEngines/core"
	"blazesockets/servicediscovery/reponse"
	"blazesockets/blazeconfig"
	"fmt"
	"blazesockets/multiplayer/Multiplayer"
)




func createRoom(roomName string , hostname string, port int, protocol string){

	var gameEngine = Room.CreateRoom(roomName , hostname , port , "tcp")
	(gameEngine).OnMessage = func(message []byte) {
		channel.OnMessageFromGameEngine( roomName,   message)
	}



}

func getRooms() []string{
 return Room.GetRoomNames()
}

//func deleteRoom(roomName string) {
// return Room.DeleteRoom(roomName)
//}

func getPlayersInRoom(roomName string) []string{
 return Room.GetPlayersInRoom(roomName)
}



func getGameEngineInfo(roomName string) response.RoomInfo{

	gameEngine, ok :=  InMemoryDB.GAMESERVER.Get(roomName)

	roomInfo := response.RoomInfo{
		Status: ok,
	}

	if(ok){
	gameEngine :=  gameEngine.(*gameengine.GameEngine)
	roomInfo.State = gameEngine.State
	//TODO move to realtime, when going for cluster
	roomInfo.GameServerSocketState = "CONNECTED"
	roomInfo.RoomName = gameEngine.RoomName
	roomInfo.PingInterval = gameEngine.PingInterval
	roomInfo.GameEngineAddress =  blazeconfig.GetMyIp() //gameEngine.GameEngineAddress
	roomInfo.Port = blazeconfig.TCP_SOCKET_PORT
	}

	return roomInfo
}




func StartApiServer() {
	r := gin.Default()

	r.POST("/api/create", func(c *gin.Context) {

		var json request.Room
		if err := c.ShouldBindJSON(&json); err != nil {
			json.Status = false
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})

		}else {
			json.Status = true
			fmt.Println(json)
			//go createRoom(json.RoomName, json.Address, json.Port, json.Protocol)
			go createRoom(json.RoomName, json.Address, json.Port, json.Protocol)

			json.Address = blazeconfig.GetMyIp()
			json.Port =  blazeconfig.TCP_SOCKET_PORT

			c.JSON(http.StatusOK, json)
		}
	})

	//r.POST("/api/join", func(c *gin.Context) {
	//
	//	var json request.Room
	//	if err := c.ShouldBindJSON(&json); err != nil {
	//		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
	//
	//	}else {
	//		c.JSON(http.StatusOK,   gin.H{"players": json  } )
	//	}
	//
	//
	//})


	r.GET("/getRooms", func(c *gin.Context) {

		rooms := getRooms()
		log.Println(rooms , len(rooms))
		c.JSON(http.StatusOK,  rooms )

	})



	r.POST("/api/join", func(c *gin.Context) {

		var json request.RoomInfo
		if err := c.ShouldBindJSON(&json); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})

		}else {


			c.JSON(http.StatusOK, getGameEngineInfo( json.RoomName )  )

		}

	})
	r.POST("/api/status", func(c *gin.Context) {

		var json request.RoomInfo
		if err := c.ShouldBindJSON(&json); err != nil {
			fmt.Println(json)
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})

		}else {

			fmt.Println(json.RoomName)
			fmt.Println( getGameEngineInfo( json.RoomName  ) )

			c.JSON(http.StatusOK, getGameEngineInfo( json.RoomName )  )

		}

	})

	r.GET("/api/info", func(c *gin.Context) {

		rooms := getRooms()
		Response := map[string]response.RoomInfo{}

		var index int
		for index =   range rooms{

			Response[rooms[index]  ] = getGameEngineInfo(rooms[index] )
		}


		c.JSON(http.StatusOK, Response  )

	})

	r.Run("0.0.0.0:4300") // listen and serve on 0.0.0.0:8080
}