package voip

import (
	"blazesockets/InMemoryDB"
	"encoding/binary"
	"fmt"
	"github.com/orcaman/concurrent-map"
	"io"
	"log"
	"net"
	"os"
	"strconv"
	"sync"
	"time"

	"github.com/go-audio/audio"
	"github.com/go-audio/wav"
)

var CHANNELS = cmap.New()


func adio() {
	// Read raw PCM data from input file.
	in, err := os.Open("audio.pcm")
	if err != nil {
		log.Fatal(err)
	}

	// Output file.go
	out, err := os.Create("output.wav")
	if err != nil {
		log.Fatal(err)
	}
	defer out.Close()

	// 8 kHz, 16 bit, 1 channel, WAV.
	e := wav.NewEncoder(out, 16000, 16, 1, 1)

	// Create new audio.IntBuffer.
	audioBuf, err := newAudioIntBuffer(in)
	if err != nil {
		log.Fatal(err)
	}
	// Write buffer to output file. This writes a RIFF header and the PCM chunks from the audio.IntBuffer.
	if err := e.Write(audioBuf); err != nil {
		log.Fatal(err)
	}
	if err := e.Close(); err != nil {
		log.Fatal(err)
	}
}

func newAudioIntBuffer(r io.Reader) (*audio.IntBuffer, error) {
	buf := audio.IntBuffer{
		Format: &audio.Format{
			NumChannels: 1,
			SampleRate:  16000,
		},
	}
	for {
		var sample int16
		err := binary.Read(r, binary.LittleEndian, &sample)
		switch {
		case err == io.EOF:
			return &buf, nil
		case err != nil:
			return nil, err
		}
		buf.Data = append(buf.Data, int(sample))
	}
}

var UDPAddresses = InMemoryDB.VOICECHATROOM

func WriteToFile(data []byte) {
	filename := "audio.pcm"
	f, err := os.OpenFile(filename, os.O_APPEND|os.O_WRONLY, 0600)
	if err != nil {
		panic(err)
	}

	defer f.Close()

	if _, err = f.Write(data); err != nil {
		panic(err)
	}
}

func BroadcastToAll(conn *net.UDPConn, data []byte, sender string) {


	for item := range UDPAddresses.IterBuffered() {
		if item.Key == sender {
			continue
		}
		if data[0] == 'A' {
			//OpusTest(data[3:])
			// timeBytes := data[len(data)-8:]
			// fmt.Println("Latency", (time.Now().UnixNano() / int64(time.Millisecond)), makeTimestamp(timeBytes))

			conn.WriteToUDP(data, item.Val.(*net.UDPAddr))

		}
	}

}

func getTimestamp() []byte {
	tm := time.Now().UnixNano() / int64(time.Millisecond)
	fmt.Println(tm)
	b := make([]byte, 8)
	binary.BigEndian.PutUint64(b, uint64(tm))
	return b
}

func makeTimestamp(timeInBytes []byte) int64 {
	timeInInt := int64(binary.BigEndian.Uint64(timeInBytes))
	fmt.Println(timeInInt)
	return timeInInt
}


func DistributedHandlingUdpConnection(workerId string, conn *net.UDPConn , wg *sync.WaitGroup){
	buf := make([]byte, 1024)
	log.Println("WorkerId", workerId)
	for {
		n, addr, err := conn.ReadFromUDP(buf)

		if err != nil{
			fmt.Println("Error", err)

		}

		_addr := fmt.Sprintf("%b", addr)
		UDPAddresses.Set(_addr, addr)
		//fmt.Println("Received ", n, "bytes from ", addr)
		go BroadcastToAll(conn, buf[0:n], _addr)
	}

	wg.Done()
}

func DistributeWork(   ){
	var wg sync.WaitGroup
	ServerConn, _ := net.ListenUDP("udp", &net.UDPAddr{IP: []byte{0, 0, 0, 0}, Port: 9876, Zone: ""})
	defer  func()  {
			fmt.Println("Closing Connection")
			ServerConn.Close()
		}()

	WORKERS := 5
	for i := 1; i <= WORKERS; i++ {
		wg.Add(1)
		go DistributedHandlingUdpConnection(  strconv.Itoa(i),  ServerConn , &wg )
	}

	wg.Wait()


}

func UdpServer() {


	DistributeWork()



}
