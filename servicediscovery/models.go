package main

import (
	"fmt"
	"github.com/mediocregopher/radix/v3"
	"strconv"
	"time"
)

var redisPool *radix.Pool


func init(){
	redisPool, _ = radix.NewPool("tcp", "localhost:6379", 10)
}



func putData( cmd string ,  args ...string) bool{

	// In another go-routine
	conn, err := redisPool.Get()
	if err != nil {
		// handle error
		return false
	}

	if conn.Cmd(cmd, args).Err != nil {
		// handle error
		return false
	}

	redisPool.Put(conn)
	return true
}
func setData( cmd string ,  args ...string) bool{

	// In another go-routine
	conn, err := redisPool.Get()
	if err != nil {
		// handle error
		return false
	}

	if conn.Cmd(cmd, args).Err != nil {
		// handle error
		return false
	}

	redisPool.Put(conn)
	return true
}


func getData( cmd string ,  args ...string) (error ,*radix.){

	// In another go-routine
	conn, err := redisPool.Get()
	if err != nil {
		// handle error
		return err , nil
	}

	Resp :=  conn.Cmd(cmd, args)

	if Resp.Err != nil {
		// handle error
		return err ,nil
	}

	redisPool.Put(conn)
	return nil, Resp
}


func RoomCreating(  roomName string) bool{
	if status := RoomCheckIfExists(roomName) ; status == 1   {
		return false
	}
	return putData("HSET", roomName , "STATUS", "CREATING" , "LAST_UPDATED", strconv.FormatInt( time.Now().Unix()  , 10) )
}

func RoomCreated(  roomName string) bool{
	return putData("HSET", roomName , "STATUS", "CREATED" , "LAST_UPDATED", strconv.FormatInt( time.Now().Unix()  , 10) )
}

func RoomCheckIfExists(roomName string) (status int){

	err ,response := getData("EXISTS",roomName )
	if(err != nil){
		status = -1

	} else {
		status , err = response.Int()
	}
	return status
}

func main(){

	success1 :=RoomCreating("Data1")
	fmt.Println(success1)
	success2 := RoomCheckIfExists("Data3")
	fmt.Println(success2)


}