package redis

import (
	"blazesockets/blazeconfig"
	"fmt"
	"time"

	"github.com/mediocregopher/radix.v3/sentinel"
)

type RedisClient struct {
	client *sentinel.Client
}

var client *sentinel.Client

type BUCKETS string

// Bucket names
const (
	NODE    BUCKETS = "nodeId"
	USER    BUCKETS = "userId"
	DEVICE  BUCKETS = "deviceId"
	SESSION BUCKETS = "session"
)

const (
	constantTimestamp   string = "TIMESTAMP"
	constantNodeAddress string = "NODE"
)

// Cluser names
const MASTER_NAME = "mymaster"

func ConnectToRedis() error {

	var redisClient RedisClient = RedisClient{}

	var err error
	// If there exists sentinel masters "bucket0" and "bucket1", and we want
	// out client to create pools for both:
	client, err = sentinel.NewClient("tcp", "sentinel:26379", 100, MASTER_NAME)
	if err != nil {
		fmt.Println(err)
		return err
	}
	redisClient.client = client
	println("CONNECTED")
	return nil
}

func UserConnected(sessionId string) bool {

	key := string(USER) + "_" + sessionId

	conn, err := client.GetMaster(MASTER_NAME)
	if err != nil {
		return false
	}

	defer client.PutMaster(MASTER_NAME, conn)
	_, err = conn.Cmd("HSET", key, constantNodeAddress, blazeconfig.GetMyId(), constantTimestamp, time.Now().Format(time.RFC850)).Int()
	if err != nil {
		return false
	}

	return true

}

func UserDisconnected(sessionKey string) bool {

	key := string(USER) + "_" + sessionKey

	conn, err := client.GetMaster(MASTER_NAME)
	if err != nil {
		return false
	}

	defer client.PutMaster(MASTER_NAME, conn)
	_, err = conn.Cmd("DEL", key).Int()
	if err != nil {
		return false
	}

	return true

}
