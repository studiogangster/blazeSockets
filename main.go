package main

import (
	socketModels "blazesockets/protoModels/models"
	bws "blazesockets/websockets"
	"fmt"
	"time"

	"github.com/golang/protobuf/proto"
)

func CreateNotificationFrame() []byte {

	notification := &socketModels.Notification{
		AppId:           "app_id",
		Desc:            "Desc",
		Intent:          socketModels.NotificationIntent_OPEN_APP,
		SDesc:           "Short Description",
		Title:           "Title",
		ShowIfInstalled: true,
	}
	// msg := bws.CreateFrame('M', notification)
	fmt.Println("Notification")
	P, _ := proto.Marshal(notification)
	msg := bws.CreateFrame('N', P)
	return msg.Bytes()
}

func CreateConfigFrame() []byte {

	notification := &socketModels.Configurator{
		Intent:   socketModels.ActionIntent_SNOOZE,
		MetaData: "Dummy meta data for configurator",
	}
	// msg := bws.CreateFrame('M', notification)
	fmt.Println("Notification")
	P, _ := proto.Marshal(notification)
	msg := bws.CreateFrame('C', P)
	return msg.Bytes()
}

func dummyBroadcast() {
	for {
		// time.Sleep(3 * time.Second)
		data := "INIT"
		for len(data) < 65000 {
			data += "PRAKHAR"
		}

		msg := CreateNotificationFrame()
		bws.BroadCastSync(msg)
		fmt.Println("Sending", "Proto Notification")
		time.Sleep(2 * time.Second)

		msg = CreateConfigFrame()
		bws.BroadCastSync(msg)
		fmt.Println("Sending", "Config Message")
		time.Sleep(2 * time.Second)

	}

}

func TestRoom() {

	bws.CreateRoom("test")

}

func main() {
	go TestRoom()

	// go SendFrame()
	// go bws.PollStatus()
	// msg := bws.CreateFrame(255, "Hello World: Prakhar Agnihotri")
	// r := bytes.NewReader(msg.Bytes())
	// MESSAGE_FRAME := bws.ParseFrame(r)

	// Logs: Message Data
	// fmt.Println("message", MESSAGE_FRAME)
	bws.ServerConfig{
		PORT:       "8080",
		EnableLogs: false,
	}.Configure()

	bws.StartServer()

}
