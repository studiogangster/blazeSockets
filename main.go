package main

import bws "blazesockets/websockets"

func main() {
	bws.StartServer(bws.ServerConfig{
		PORT: 8080,
	})
}
