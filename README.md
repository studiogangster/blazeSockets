*Dependency Requirement:*
    dep
    golang 


*Installation Instructions:*
    dep init
    git clone https://github.com/rounak316/blazeSockets.git
    dep ensure


*Usage Instructions:*
    package main
    import bws "blazesockets/websockets"
    func main() {
        bws.StartServer(bws.ServerConfig{
            PORT: 8080,
        })
    }




