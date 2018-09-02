package main

import (
	example "blazesockets/example"
	bws "blazesockets/websockets"
	"fmt"
	"time"

	"github.com/golang/protobuf/proto"
)

func createNotificationFrame() []byte {

	notification := &example.Notification{
		AppId:  "app_id",
		Desc:   "Desc",
		Intent: example.NotificationIntent_OPEN_APP,
		SDesc:  "Short Description",
		Title:  "Title",
	}

	// msg := bws.CreateFrame('M', notification)

	fmt.Println("Notification")
	P, _ := proto.Marshal(notification)

	msg := bws.CreateFrame('M', P)

	return msg.Bytes()

}

func dummyBroadcast() {
	for {
		// time.Sleep(3 * time.Second)
		data := "INIT"
		for len(data) < 65000 {
			data += "PRAKHAR"
		}

		msg := createNotificationFrame()
		bws.BroadCastSync(msg)
		fmt.Println("Sending", "Proto Notification")
		time.Sleep(2 * time.Second)

	}

}

func main() {
	dummyBroadcast()

	// go SendFrame()
	// go bws.PollStatus()
	// msg := bws.CreateFrame(255, "Hello World: Prakhar Agnihotri")
	// r := bytes.NewReader(msg.Bytes())
	// MESSAGE_FRAME := bws.ParseFrame(r)

	// Logs: Message Data
	// fmt.Println("message", MESSAGE_FRAME)
	bws.ServerConfig{
		PORT:       "8080",
		EnableLogs: true,
	}.Configure()
	bws.StartServer()

}
