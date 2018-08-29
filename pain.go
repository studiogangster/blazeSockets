package main

import (
	"bytes"
	"fmt"
)

var buffer bytes.Buffer

func _main() {

	for i := 0; i < 100; i++ {
		buffer.WriteByte(byte(i))
	}

	for i := 0; i < 100; i++ {
		_byte, err := buffer.ReadByte()
		fmt.Println("Read", i, _byte, buffer.Len(), buffer, err)
	}

}
