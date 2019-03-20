protoc --go_out=./models/ *.proto
protoc --csharp_out=./modelSCharp/ *.proto
protoc --js_out=import_style=commonjs,binary:./modelJS/ *.proto
protoc --java_out=./modelJava/ *.proto
