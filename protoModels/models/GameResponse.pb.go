// Code generated by protoc-gen-go. DO NOT EDIT.
// source: GameResponse.proto

package proxy_proto_models

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion2 // please upgrade the proto package

type GameResponseType int32

const (
	GameResponseType_CREATE_ROOM_RESPONSE           GameResponseType = 0
	GameResponseType_JOIN_ROOM_RESPONSE             GameResponseType = 1
	GameResponseType_LEAVE_ROOM_RESPONSE            GameResponseType = 2
	GameResponseType_DESTROY_ROOM_RESPONSE          GameResponseType = 3
	GameResponseType_HALT_ROOM_RESPONSE             GameResponseType = 4
	GameResponseType_GET_ROOMS_RESPONSE             GameResponseType = 5
	GameResponseType_GET_ROOM_DETAILS_RESPONSE      GameResponseType = 6
	GameResponseType_KICK_PLAYER_FROM_ROOM_RESPONSE GameResponseType = 7
	GameResponseType_SEND_MESSAGE_RESPONSE          GameResponseType = 8
	GameResponseType_GET_STATUS_RESPONSE            GameResponseType = 9
)

var GameResponseType_name = map[int32]string{
	0: "CREATE_ROOM_RESPONSE",
	1: "JOIN_ROOM_RESPONSE",
	2: "LEAVE_ROOM_RESPONSE",
	3: "DESTROY_ROOM_RESPONSE",
	4: "HALT_ROOM_RESPONSE",
	5: "GET_ROOMS_RESPONSE",
	6: "GET_ROOM_DETAILS_RESPONSE",
	7: "KICK_PLAYER_FROM_ROOM_RESPONSE",
	8: "SEND_MESSAGE_RESPONSE",
	9: "GET_STATUS_RESPONSE",
}
var GameResponseType_value = map[string]int32{
	"CREATE_ROOM_RESPONSE":           0,
	"JOIN_ROOM_RESPONSE":             1,
	"LEAVE_ROOM_RESPONSE":            2,
	"DESTROY_ROOM_RESPONSE":          3,
	"HALT_ROOM_RESPONSE":             4,
	"GET_ROOMS_RESPONSE":             5,
	"GET_ROOM_DETAILS_RESPONSE":      6,
	"KICK_PLAYER_FROM_ROOM_RESPONSE": 7,
	"SEND_MESSAGE_RESPONSE":          8,
	"GET_STATUS_RESPONSE":            9,
}

func (x GameResponseType) String() string {
	return proto.EnumName(GameResponseType_name, int32(x))
}
func (GameResponseType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_GameResponse_b521ebaf4e516fb9, []int{0}
}

type GameResponse struct {
	GameResponseType     GameResponseType `protobuf:"varint,1,opt,name=gameResponseType,proto3,enum=proxy.proto.models.GameResponseType" json:"gameResponseType,omitempty"`
	Success              bool             `protobuf:"varint,2,opt,name=success,proto3" json:"success,omitempty"`
	Messsage             []byte           `protobuf:"bytes,3,opt,name=messsage,proto3" json:"messsage,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *GameResponse) Reset()         { *m = GameResponse{} }
func (m *GameResponse) String() string { return proto.CompactTextString(m) }
func (*GameResponse) ProtoMessage()    {}
func (*GameResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_GameResponse_b521ebaf4e516fb9, []int{0}
}
func (m *GameResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GameResponse.Unmarshal(m, b)
}
func (m *GameResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GameResponse.Marshal(b, m, deterministic)
}
func (dst *GameResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GameResponse.Merge(dst, src)
}
func (m *GameResponse) XXX_Size() int {
	return xxx_messageInfo_GameResponse.Size(m)
}
func (m *GameResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GameResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GameResponse proto.InternalMessageInfo

func (m *GameResponse) GetGameResponseType() GameResponseType {
	if m != nil {
		return m.GameResponseType
	}
	return GameResponseType_CREATE_ROOM_RESPONSE
}

func (m *GameResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

func (m *GameResponse) GetMesssage() []byte {
	if m != nil {
		return m.Messsage
	}
	return nil
}

func init() {
	proto.RegisterType((*GameResponse)(nil), "proxy.proto.models.GameResponse")
	proto.RegisterEnum("proxy.proto.models.GameResponseType", GameResponseType_name, GameResponseType_value)
}

func init() { proto.RegisterFile("GameResponse.proto", fileDescriptor_GameResponse_b521ebaf4e516fb9) }

var fileDescriptor_GameResponse_b521ebaf4e516fb9 = []byte{
	// 291 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x91, 0xcf, 0x4a, 0xf3, 0x40,
	0x14, 0xc5, 0xbf, 0x69, 0x3f, 0xdb, 0x3a, 0x14, 0x29, 0xd7, 0x7f, 0xa9, 0xa0, 0x84, 0xe2, 0x22,
	0xb8, 0xc8, 0x42, 0x9f, 0x60, 0x68, 0xae, 0x31, 0x36, 0x4d, 0xc2, 0xcc, 0x28, 0x74, 0x35, 0xd4,
	0x3a, 0x74, 0x63, 0x4c, 0xe8, 0x28, 0xd8, 0x17, 0x71, 0xeb, 0xab, 0xca, 0x58, 0x6a, 0x63, 0xb2,
	0x3c, 0xbf, 0x73, 0xcf, 0x8f, 0x84, 0xa1, 0x10, 0xce, 0x73, 0xcd, 0xb5, 0x29, 0x8b, 0x57, 0xa3,
	0xfd, 0x72, 0x55, 0xbc, 0x15, 0x00, 0xe5, 0xaa, 0xf8, 0x58, 0x6f, 0x82, 0x9f, 0x17, 0xcf, 0xfa,
	0xc5, 0x8c, 0x3e, 0x09, 0xed, 0x57, 0x4f, 0x21, 0xa3, 0x83, 0x65, 0x25, 0xcb, 0x75, 0xa9, 0x1d,
	0xe2, 0x12, 0xef, 0xe0, 0xfa, 0xd2, 0x6f, 0xee, 0xfd, 0xb0, 0x76, 0xcb, 0x1b, 0x6b, 0x70, 0x68,
	0xd7, 0xbc, 0x2f, 0x16, 0xda, 0x18, 0xa7, 0xe5, 0x12, 0xaf, 0xc7, 0xb7, 0x11, 0xce, 0x68, 0x2f,
	0xd7, 0xc6, 0x98, 0xf9, 0x52, 0x3b, 0x6d, 0x97, 0x78, 0x7d, 0xfe, 0x9b, 0xaf, 0xbe, 0x5a, 0x74,
	0x10, 0x36, 0x55, 0x47, 0x63, 0x8e, 0x4c, 0xa2, 0xe2, 0x69, 0x3a, 0x55, 0x1c, 0x45, 0x96, 0x26,
	0x02, 0x07, 0xff, 0xe0, 0x84, 0xc2, 0x7d, 0x1a, 0x25, 0x35, 0x4e, 0xe0, 0x94, 0x1e, 0xc6, 0xc8,
	0x1e, 0xeb, 0x83, 0x16, 0x0c, 0xe9, 0x71, 0x80, 0x42, 0xf2, 0x74, 0x56, 0xab, 0xda, 0xd6, 0x75,
	0xc7, 0x62, 0x59, 0xe3, 0xff, 0x2d, 0x0f, 0x71, 0x83, 0xc5, 0x8e, 0xef, 0xc1, 0x39, 0x1d, 0x6e,
	0xb9, 0x0a, 0x50, 0xb2, 0x28, 0xae, 0xd4, 0x1d, 0x18, 0xd1, 0x8b, 0x49, 0x34, 0x9e, 0xa8, 0x2c,
	0x66, 0x33, 0xe4, 0xea, 0x96, 0x5b, 0xeb, 0x1f, 0x75, 0xd7, 0x7e, 0x8d, 0xc0, 0x24, 0x50, 0x53,
	0x14, 0x82, 0x85, 0xb8, 0xab, 0x7a, 0xf6, 0x0f, 0xac, 0x5d, 0x48, 0x26, 0x1f, 0x2a, 0xde, 0xfd,
	0xa7, 0xce, 0xcf, 0x43, 0xdc, 0x7c, 0x07, 0x00, 0x00, 0xff, 0xff, 0x3c, 0x86, 0x9f, 0x35, 0xeb,
	0x01, 0x00, 0x00,
}