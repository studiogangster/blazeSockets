# BlazeSockets

[![N|Solid](https://farm1.staticflickr.com/908/40093179410_4c508d3342_o.png)](https://golang.org/)

Ultra light weight, and highly customisable websockets, written in goLang.

  - Highly optimised
  - Multithread support
  - kQueue/ePoll Implemented
  - Zero copy upgrade
  - Dead/Stale socket detection

# Requirement:

  - dep
  - Golang


# Installation:
  - dep init
  - git clone https://github.com/rounak316/blazeSockets.git
  - dep ensure


## Example
    package main
        import bws "blazesockets/websockets"
        func main() {
            bws.StartServer(bws.ServerConfig{
                PORT: 8080,
            })
        }
    