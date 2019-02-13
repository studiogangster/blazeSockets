package voip

import (
	"fmt"
	"net"

	cMap "github.com/orcaman/concurrent-map"
)

var UDPAddresses = cMap.New()

func BroadcastToAll(conn *net.UDPConn, data []byte, sender string) {
	fmt.Println("Broadcasting To", UDPAddresses.Count())

	for item := range UDPAddresses.IterBuffered() {
		if item.Key == sender {
			continue
		}
		if data[0] == 'A' {
			conn.WriteToUDP(data, item.Val.(*net.UDPAddr))
		}
	}

}

func UdpServer() {

	ServerConn, _ := net.ListenUDP("udp", &net.UDPAddr{IP: []byte{0, 0, 0, 0}, Port: 9876, Zone: ""})
	defer ServerConn.Close()
	buf := make([]byte, 1024)
	for {
		n, addr, _ := ServerConn.ReadFromUDP(buf)
		_addr := fmt.Sprintf("%b", addr)
		UDPAddresses.Set(_addr, addr)
		fmt.Println("Received ", n, "bytes from ", addr)
		go BroadcastToAll(ServerConn, buf[0:n], _addr)
	}

}
