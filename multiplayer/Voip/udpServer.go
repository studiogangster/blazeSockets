package voip

import (
	"encoding/binary"
	"fmt"
	"io"
	"log"
	"net"
	"os"
	"time"

	"gopkg.in/hraban/opus.v2"

	"github.com/go-audio/audio"
	"github.com/go-audio/wav"
	cMap "github.com/orcaman/concurrent-map"
)

func adio() {
	// Read raw PCM data from input file.
	in, err := os.Open("audio.pcm")
	if err != nil {
		log.Fatal(err)
	}

	// Output file.
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

var UDPAddresses = cMap.New()

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
func OpusTest(inp []byte) {

	out := make([]int16, 2048)
	decoder, _ := opus.NewDecoder(16000, 1)
	dec, err := decoder.Decode(inp, out)

	fmt.Println("Data", dec, err, len(inp))
}

func BroadcastToAll(conn *net.UDPConn, data []byte, sender string) {

	fmt.Println("Broadcasting To", UDPAddresses.Count())

	for item := range UDPAddresses.IterBuffered() {
		if item.Key == sender {
			// continue
		}
		if data[0] == 'A' {
			OpusTest(data[3:])
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

func UdpServer() {

	ServerConn, _ := net.ListenUDP("udp", &net.UDPAddr{IP: []byte{0, 0, 0, 0}, Port: 9876, Zone: ""})
	defer ServerConn.Close()
	buf := make([]byte, 1024)
	for {
		n, addr, _ := ServerConn.ReadFromUDP(buf)
		_addr := fmt.Sprintf("%b", addr)
		UDPAddresses.Set(_addr, addr)
		fmt.Println("Received ", n, "bytes from ", addr)
		BroadcastToAll(ServerConn, buf[0:n], _addr)
	}

}
