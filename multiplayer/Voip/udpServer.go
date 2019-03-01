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
var BROADCASTER_WORKERS = 20
var WORKERS = 10


//UDP_MESSAGE_TYPES
const (
	CONNECT = 'C'
	PING = 'P'
	AUDIO_DATA = 'A'

)


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

type BroadcastData struct {
	Data *[]byte
	Address *net.UDPAddr
	}


func broadcastToAll( conn *net.UDPConn , channel <-chan BroadcastData , workerId string  ) {

	for {

		Input := <-channel

		data := *Input.Data
		sender :=  string( data[9:13])
		switch data[0] {

		case CONNECT:

			InMemoryDB.VOICECHATROOM.Set(sender, Input.Address)

			break
		case AUDIO_DATA:
				for item := range InMemoryDB.VOICECHATROOM.IterBuffered() {
					if item.Key == sender {
						continue
					}
					//OpusTest(data[3:])
					// timeBytes := data[len(data)-8:]
					// fmt.Println("Latency", (time.Now().UnixNano() / int64(time.Millisecond)), makeTimestamp(timeBytes))
					go conn.WriteToUDP(data, item.Val.(*net.UDPAddr))
					//log.Println("Data ", "Sender" , Input.Address , "Reciever", item.Key , item.Val )
				}

			break

		case PING:
			log.Println("CLIENT_ID", string( data[9:13] ) )
			InMemoryDB.VOICECHATROOM.Set(sender, Input.Address)
			break

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

func distributedHandlingUdpConnection(workerId string, conn *net.UDPConn , wg *sync.WaitGroup){

	Channel := make(chan  BroadcastData , 10)

	for i := 1; i <= BROADCASTER_WORKERS; i++ {
		go broadcastToAll( conn, Channel , strconv.Itoa(i)  )
	}


	buf := make([]byte, 1024)
	log.Println("WorkerId", workerId)

	for {
		//log.Println("Waiting for data")
		n, addr, _ := conn.ReadFromUDP(buf)
		//log.Println("Read", n , addr , err)
		filtereData := make([]byte, n)
		copy(filtereData, buf)
		Channel <- BroadcastData{
			 Data: &filtereData,
			 Address: addr,
		}

	}
	//Workers will never die
	//wg.Done()
}

func distributeWork(   ){
	var wg sync.WaitGroup
	ServerConn, _ := net.ListenUDP("udp", &net.UDPAddr{IP: []byte{0, 0, 0, 0}, Port: 9876, Zone: ""})
	defer  func()  {
			fmt.Println("Closing Connection")
			ServerConn.Close()
		}()


	for i := 1; i <= WORKERS; i++ {
		wg.Add(1)
		go distributedHandlingUdpConnection(  strconv.Itoa(i),  ServerConn , &wg )
	}

	wg.Wait()
}


func UdpServer() {
	distributeWork()
}
