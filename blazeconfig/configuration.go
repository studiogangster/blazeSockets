package blazeconfig

import "os"

const myId = "ThisIsMyIniqueId"

const TCP_SOCKET_PORT = "8080"

func getenv(key, fallback string) string {
	value := os.Getenv(key)
	if len(value) == 0 {
		return fallback
	}
	return value
}



func GetMyId() string {

	return myId
}


func GetMyIp() string{
	return getenv("HOST", "10.150.69.66")
}
