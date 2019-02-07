// Code generated by protoc-gen-go. DO NOT EDIT.
// source: MultiplayerGame.proto

package com_example_proto

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

type MultiplayerMessageType int32

const (
	MultiplayerMessageType_ROOM_CREATE       MultiplayerMessageType = 0
	MultiplayerMessageType_ROOM_JOIN         MultiplayerMessageType = 1
	MultiplayerMessageType_ROOM_LEAVE        MultiplayerMessageType = 2
	MultiplayerMessageType_ROOM_DESTROY      MultiplayerMessageType = 3
	MultiplayerMessageType_ROOM_HALT         MultiplayerMessageType = 4
	MultiplayerMessageType_ROOM_GET_DETAILS  MultiplayerMessageType = 5
	MultiplayerMessageType_ROOM_ADD_PLAYER   MultiplayerMessageType = 6
	MultiplayerMessageType_ROOM_KICK_PLAYER  MultiplayerMessageType = 7
	MultiplayerMessageType_ROOM_SEND_MESSAGE MultiplayerMessageType = 8
)

var MultiplayerMessageType_name = map[int32]string{
	0: "ROOM_CREATE",
	1: "ROOM_JOIN",
	2: "ROOM_LEAVE",
	3: "ROOM_DESTROY",
	4: "ROOM_HALT",
	5: "ROOM_GET_DETAILS",
	6: "ROOM_ADD_PLAYER",
	7: "ROOM_KICK_PLAYER",
	8: "ROOM_SEND_MESSAGE",
}
var MultiplayerMessageType_value = map[string]int32{
	"ROOM_CREATE":       0,
	"ROOM_JOIN":         1,
	"ROOM_LEAVE":        2,
	"ROOM_DESTROY":      3,
	"ROOM_HALT":         4,
	"ROOM_GET_DETAILS":  5,
	"ROOM_ADD_PLAYER":   6,
	"ROOM_KICK_PLAYER":  7,
	"ROOM_SEND_MESSAGE": 8,
}

func (x MultiplayerMessageType) String() string {
	return proto.EnumName(MultiplayerMessageType_name, int32(x))
}
func (MultiplayerMessageType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{0}
}

type MultiplayerMessage struct {
	MultiplayerMessageType MultiplayerMessageType `protobuf:"varint,1,opt,name=multiplayerMessageType,proto3,enum=com.example.proto.MultiplayerMessageType" json:"multiplayerMessageType,omitempty"`
	Messsage               []byte                 `protobuf:"bytes,2,opt,name=messsage,proto3" json:"messsage,omitempty"`
	XXX_NoUnkeyedLiteral   struct{}               `json:"-"`
	XXX_unrecognized       []byte                 `json:"-"`
	XXX_sizecache          int32                  `json:"-"`
}

func (m *MultiplayerMessage) Reset()         { *m = MultiplayerMessage{} }
func (m *MultiplayerMessage) String() string { return proto.CompactTextString(m) }
func (*MultiplayerMessage) ProtoMessage()    {}
func (*MultiplayerMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{0}
}
func (m *MultiplayerMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MultiplayerMessage.Unmarshal(m, b)
}
func (m *MultiplayerMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MultiplayerMessage.Marshal(b, m, deterministic)
}
func (dst *MultiplayerMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MultiplayerMessage.Merge(dst, src)
}
func (m *MultiplayerMessage) XXX_Size() int {
	return xxx_messageInfo_MultiplayerMessage.Size(m)
}
func (m *MultiplayerMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_MultiplayerMessage.DiscardUnknown(m)
}

var xxx_messageInfo_MultiplayerMessage proto.InternalMessageInfo

func (m *MultiplayerMessage) GetMultiplayerMessageType() MultiplayerMessageType {
	if m != nil {
		return m.MultiplayerMessageType
	}
	return MultiplayerMessageType_ROOM_CREATE
}

func (m *MultiplayerMessage) GetMesssage() []byte {
	if m != nil {
		return m.Messsage
	}
	return nil
}

type RoomCreate struct {
	RoomToken            string   `protobuf:"bytes,1,opt,name=roomToken,proto3" json:"roomToken,omitempty"`
	RoomName             string   `protobuf:"bytes,2,opt,name=roomName,proto3" json:"roomName,omitempty"`
	RoomSize             string   `protobuf:"bytes,3,opt,name=roomSize,proto3" json:"roomSize,omitempty"`
	RoomTTL              string   `protobuf:"bytes,4,opt,name=roomTTL,proto3" json:"roomTTL,omitempty"`
	RoomId               string   `protobuf:"bytes,5,opt,name=roomId,proto3" json:"roomId,omitempty"`
	GameId               string   `protobuf:"bytes,6,opt,name=gameId,proto3" json:"gameId,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RoomCreate) Reset()         { *m = RoomCreate{} }
func (m *RoomCreate) String() string { return proto.CompactTextString(m) }
func (*RoomCreate) ProtoMessage()    {}
func (*RoomCreate) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{1}
}
func (m *RoomCreate) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RoomCreate.Unmarshal(m, b)
}
func (m *RoomCreate) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RoomCreate.Marshal(b, m, deterministic)
}
func (dst *RoomCreate) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RoomCreate.Merge(dst, src)
}
func (m *RoomCreate) XXX_Size() int {
	return xxx_messageInfo_RoomCreate.Size(m)
}
func (m *RoomCreate) XXX_DiscardUnknown() {
	xxx_messageInfo_RoomCreate.DiscardUnknown(m)
}

var xxx_messageInfo_RoomCreate proto.InternalMessageInfo

func (m *RoomCreate) GetRoomToken() string {
	if m != nil {
		return m.RoomToken
	}
	return ""
}

func (m *RoomCreate) GetRoomName() string {
	if m != nil {
		return m.RoomName
	}
	return ""
}

func (m *RoomCreate) GetRoomSize() string {
	if m != nil {
		return m.RoomSize
	}
	return ""
}

func (m *RoomCreate) GetRoomTTL() string {
	if m != nil {
		return m.RoomTTL
	}
	return ""
}

func (m *RoomCreate) GetRoomId() string {
	if m != nil {
		return m.RoomId
	}
	return ""
}

func (m *RoomCreate) GetGameId() string {
	if m != nil {
		return m.GameId
	}
	return ""
}

type RoomJoin struct {
	RoomToken            string   `protobuf:"bytes,1,opt,name=roomToken,proto3" json:"roomToken,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RoomJoin) Reset()         { *m = RoomJoin{} }
func (m *RoomJoin) String() string { return proto.CompactTextString(m) }
func (*RoomJoin) ProtoMessage()    {}
func (*RoomJoin) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{2}
}
func (m *RoomJoin) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RoomJoin.Unmarshal(m, b)
}
func (m *RoomJoin) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RoomJoin.Marshal(b, m, deterministic)
}
func (dst *RoomJoin) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RoomJoin.Merge(dst, src)
}
func (m *RoomJoin) XXX_Size() int {
	return xxx_messageInfo_RoomJoin.Size(m)
}
func (m *RoomJoin) XXX_DiscardUnknown() {
	xxx_messageInfo_RoomJoin.DiscardUnknown(m)
}

var xxx_messageInfo_RoomJoin proto.InternalMessageInfo

func (m *RoomJoin) GetRoomToken() string {
	if m != nil {
		return m.RoomToken
	}
	return ""
}

type RoomLeave struct {
	RoomToken            string   `protobuf:"bytes,1,opt,name=roomToken,proto3" json:"roomToken,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RoomLeave) Reset()         { *m = RoomLeave{} }
func (m *RoomLeave) String() string { return proto.CompactTextString(m) }
func (*RoomLeave) ProtoMessage()    {}
func (*RoomLeave) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{3}
}
func (m *RoomLeave) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RoomLeave.Unmarshal(m, b)
}
func (m *RoomLeave) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RoomLeave.Marshal(b, m, deterministic)
}
func (dst *RoomLeave) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RoomLeave.Merge(dst, src)
}
func (m *RoomLeave) XXX_Size() int {
	return xxx_messageInfo_RoomLeave.Size(m)
}
func (m *RoomLeave) XXX_DiscardUnknown() {
	xxx_messageInfo_RoomLeave.DiscardUnknown(m)
}

var xxx_messageInfo_RoomLeave proto.InternalMessageInfo

func (m *RoomLeave) GetRoomToken() string {
	if m != nil {
		return m.RoomToken
	}
	return ""
}

type RoomDestroy struct {
	RoomToken            string   `protobuf:"bytes,1,opt,name=roomToken,proto3" json:"roomToken,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RoomDestroy) Reset()         { *m = RoomDestroy{} }
func (m *RoomDestroy) String() string { return proto.CompactTextString(m) }
func (*RoomDestroy) ProtoMessage()    {}
func (*RoomDestroy) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{4}
}
func (m *RoomDestroy) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RoomDestroy.Unmarshal(m, b)
}
func (m *RoomDestroy) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RoomDestroy.Marshal(b, m, deterministic)
}
func (dst *RoomDestroy) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RoomDestroy.Merge(dst, src)
}
func (m *RoomDestroy) XXX_Size() int {
	return xxx_messageInfo_RoomDestroy.Size(m)
}
func (m *RoomDestroy) XXX_DiscardUnknown() {
	xxx_messageInfo_RoomDestroy.DiscardUnknown(m)
}

var xxx_messageInfo_RoomDestroy proto.InternalMessageInfo

func (m *RoomDestroy) GetRoomToken() string {
	if m != nil {
		return m.RoomToken
	}
	return ""
}

type RoomHalt struct {
	RoomToken            string   `protobuf:"bytes,1,opt,name=roomToken,proto3" json:"roomToken,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RoomHalt) Reset()         { *m = RoomHalt{} }
func (m *RoomHalt) String() string { return proto.CompactTextString(m) }
func (*RoomHalt) ProtoMessage()    {}
func (*RoomHalt) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{5}
}
func (m *RoomHalt) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RoomHalt.Unmarshal(m, b)
}
func (m *RoomHalt) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RoomHalt.Marshal(b, m, deterministic)
}
func (dst *RoomHalt) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RoomHalt.Merge(dst, src)
}
func (m *RoomHalt) XXX_Size() int {
	return xxx_messageInfo_RoomHalt.Size(m)
}
func (m *RoomHalt) XXX_DiscardUnknown() {
	xxx_messageInfo_RoomHalt.DiscardUnknown(m)
}

var xxx_messageInfo_RoomHalt proto.InternalMessageInfo

func (m *RoomHalt) GetRoomToken() string {
	if m != nil {
		return m.RoomToken
	}
	return ""
}

type RoomGetDetails struct {
	RoomToken            string   `protobuf:"bytes,1,opt,name=roomToken,proto3" json:"roomToken,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RoomGetDetails) Reset()         { *m = RoomGetDetails{} }
func (m *RoomGetDetails) String() string { return proto.CompactTextString(m) }
func (*RoomGetDetails) ProtoMessage()    {}
func (*RoomGetDetails) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{6}
}
func (m *RoomGetDetails) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RoomGetDetails.Unmarshal(m, b)
}
func (m *RoomGetDetails) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RoomGetDetails.Marshal(b, m, deterministic)
}
func (dst *RoomGetDetails) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RoomGetDetails.Merge(dst, src)
}
func (m *RoomGetDetails) XXX_Size() int {
	return xxx_messageInfo_RoomGetDetails.Size(m)
}
func (m *RoomGetDetails) XXX_DiscardUnknown() {
	xxx_messageInfo_RoomGetDetails.DiscardUnknown(m)
}

var xxx_messageInfo_RoomGetDetails proto.InternalMessageInfo

func (m *RoomGetDetails) GetRoomToken() string {
	if m != nil {
		return m.RoomToken
	}
	return ""
}

type RoomAddPlayer struct {
	RoomToken            string   `protobuf:"bytes,1,opt,name=roomToken,proto3" json:"roomToken,omitempty"`
	PlayerId             string   `protobuf:"bytes,2,opt,name=playerId,proto3" json:"playerId,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RoomAddPlayer) Reset()         { *m = RoomAddPlayer{} }
func (m *RoomAddPlayer) String() string { return proto.CompactTextString(m) }
func (*RoomAddPlayer) ProtoMessage()    {}
func (*RoomAddPlayer) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{7}
}
func (m *RoomAddPlayer) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RoomAddPlayer.Unmarshal(m, b)
}
func (m *RoomAddPlayer) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RoomAddPlayer.Marshal(b, m, deterministic)
}
func (dst *RoomAddPlayer) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RoomAddPlayer.Merge(dst, src)
}
func (m *RoomAddPlayer) XXX_Size() int {
	return xxx_messageInfo_RoomAddPlayer.Size(m)
}
func (m *RoomAddPlayer) XXX_DiscardUnknown() {
	xxx_messageInfo_RoomAddPlayer.DiscardUnknown(m)
}

var xxx_messageInfo_RoomAddPlayer proto.InternalMessageInfo

func (m *RoomAddPlayer) GetRoomToken() string {
	if m != nil {
		return m.RoomToken
	}
	return ""
}

func (m *RoomAddPlayer) GetPlayerId() string {
	if m != nil {
		return m.PlayerId
	}
	return ""
}

type RoomKickPlayer struct {
	RoomToken            string   `protobuf:"bytes,1,opt,name=roomToken,proto3" json:"roomToken,omitempty"`
	PlayerId             string   `protobuf:"bytes,2,opt,name=playerId,proto3" json:"playerId,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RoomKickPlayer) Reset()         { *m = RoomKickPlayer{} }
func (m *RoomKickPlayer) String() string { return proto.CompactTextString(m) }
func (*RoomKickPlayer) ProtoMessage()    {}
func (*RoomKickPlayer) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{8}
}
func (m *RoomKickPlayer) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RoomKickPlayer.Unmarshal(m, b)
}
func (m *RoomKickPlayer) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RoomKickPlayer.Marshal(b, m, deterministic)
}
func (dst *RoomKickPlayer) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RoomKickPlayer.Merge(dst, src)
}
func (m *RoomKickPlayer) XXX_Size() int {
	return xxx_messageInfo_RoomKickPlayer.Size(m)
}
func (m *RoomKickPlayer) XXX_DiscardUnknown() {
	xxx_messageInfo_RoomKickPlayer.DiscardUnknown(m)
}

var xxx_messageInfo_RoomKickPlayer proto.InternalMessageInfo

func (m *RoomKickPlayer) GetRoomToken() string {
	if m != nil {
		return m.RoomToken
	}
	return ""
}

func (m *RoomKickPlayer) GetPlayerId() string {
	if m != nil {
		return m.PlayerId
	}
	return ""
}

type RoomSendMessage struct {
	RoomToken            string   `protobuf:"bytes,1,opt,name=roomToken,proto3" json:"roomToken,omitempty"`
	Message              string   `protobuf:"bytes,2,opt,name=message,proto3" json:"message,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RoomSendMessage) Reset()         { *m = RoomSendMessage{} }
func (m *RoomSendMessage) String() string { return proto.CompactTextString(m) }
func (*RoomSendMessage) ProtoMessage()    {}
func (*RoomSendMessage) Descriptor() ([]byte, []int) {
	return fileDescriptor_MultiplayerGame_81dc52b5e39427b0, []int{9}
}
func (m *RoomSendMessage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RoomSendMessage.Unmarshal(m, b)
}
func (m *RoomSendMessage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RoomSendMessage.Marshal(b, m, deterministic)
}
func (dst *RoomSendMessage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RoomSendMessage.Merge(dst, src)
}
func (m *RoomSendMessage) XXX_Size() int {
	return xxx_messageInfo_RoomSendMessage.Size(m)
}
func (m *RoomSendMessage) XXX_DiscardUnknown() {
	xxx_messageInfo_RoomSendMessage.DiscardUnknown(m)
}

var xxx_messageInfo_RoomSendMessage proto.InternalMessageInfo

func (m *RoomSendMessage) GetRoomToken() string {
	if m != nil {
		return m.RoomToken
	}
	return ""
}

func (m *RoomSendMessage) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func init() {
	proto.RegisterType((*MultiplayerMessage)(nil), "com.example.proto.MultiplayerMessage")
	proto.RegisterType((*RoomCreate)(nil), "com.example.proto.RoomCreate")
	proto.RegisterType((*RoomJoin)(nil), "com.example.proto.RoomJoin")
	proto.RegisterType((*RoomLeave)(nil), "com.example.proto.RoomLeave")
	proto.RegisterType((*RoomDestroy)(nil), "com.example.proto.RoomDestroy")
	proto.RegisterType((*RoomHalt)(nil), "com.example.proto.RoomHalt")
	proto.RegisterType((*RoomGetDetails)(nil), "com.example.proto.RoomGetDetails")
	proto.RegisterType((*RoomAddPlayer)(nil), "com.example.proto.RoomAddPlayer")
	proto.RegisterType((*RoomKickPlayer)(nil), "com.example.proto.RoomKickPlayer")
	proto.RegisterType((*RoomSendMessage)(nil), "com.example.proto.RoomSendMessage")
	proto.RegisterEnum("com.example.proto.MultiplayerMessageType", MultiplayerMessageType_name, MultiplayerMessageType_value)
}

func init() {
	proto.RegisterFile("MultiplayerGame.proto", fileDescriptor_MultiplayerGame_81dc52b5e39427b0)
}

var fileDescriptor_MultiplayerGame_81dc52b5e39427b0 = []byte{
	// 457 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x93, 0xcf, 0x6e, 0x9b, 0x40,
	0x10, 0xc6, 0x4b, 0xfe, 0x38, 0x66, 0x92, 0xd8, 0x9b, 0x6d, 0x63, 0xa1, 0xaa, 0x87, 0x88, 0x93,
	0xd3, 0x4a, 0x3e, 0xb4, 0x4f, 0x80, 0xcc, 0xca, 0xc1, 0x06, 0x3b, 0x5a, 0x50, 0xa5, 0x9c, 0xac,
	0x6d, 0x18, 0x45, 0x28, 0xac, 0xd7, 0x02, 0x5a, 0xd5, 0x7d, 0x8d, 0xbe, 0x46, 0x5f, 0xa2, 0x6f,
	0x56, 0xed, 0x62, 0xec, 0x4a, 0x49, 0xc3, 0xa1, 0x37, 0x7e, 0xdf, 0x7c, 0xf3, 0x31, 0x68, 0x06,
	0xb8, 0x8c, 0xbe, 0xe6, 0x55, 0xb6, 0xce, 0xc5, 0x06, 0x8b, 0x89, 0x90, 0x38, 0x5a, 0x17, 0xaa,
	0x52, 0xf4, 0xe2, 0x5e, 0xc9, 0x11, 0x7e, 0x17, 0x72, 0x9d, 0x6f, 0x25, 0xf7, 0xa7, 0x05, 0xf4,
	0x2f, 0x73, 0x84, 0x65, 0x29, 0x1e, 0x90, 0x0a, 0x18, 0xc8, 0x27, 0x6a, 0xb2, 0x59, 0xa3, 0x63,
	0x5d, 0x59, 0xc3, 0xde, 0xc7, 0xeb, 0xd1, 0x93, 0xa8, 0x51, 0xf4, 0x6c, 0x03, 0xff, 0x47, 0x10,
	0x7d, 0x0b, 0x5d, 0x89, 0xa5, 0x61, 0xe7, 0xe0, 0xca, 0x1a, 0x9e, 0xf1, 0x1d, 0xbb, 0xbf, 0x2c,
	0x00, 0xae, 0x94, 0x1c, 0x17, 0x28, 0x2a, 0xa4, 0xef, 0xc0, 0x2e, 0x94, 0x92, 0x89, 0x7a, 0xc4,
	0x95, 0x19, 0xc0, 0xe6, 0x7b, 0x41, 0x07, 0x69, 0x98, 0x0b, 0x59, 0x07, 0xd9, 0x7c, 0xc7, 0x4d,
	0x2d, 0xce, 0x7e, 0xa0, 0x73, 0xb8, 0xaf, 0x69, 0xa6, 0x0e, 0x9c, 0x98, 0x90, 0x24, 0x74, 0x8e,
	0x4c, 0xa9, 0x41, 0x3a, 0x80, 0x8e, 0x7e, 0x0c, 0x52, 0xe7, 0xd8, 0x14, 0xb6, 0xa4, 0xf5, 0x07,
	0x21, 0x31, 0x48, 0x9d, 0x4e, 0xad, 0xd7, 0xe4, 0x0e, 0xa1, 0xab, 0xa7, 0x9d, 0xaa, 0x6c, 0xf5,
	0xf2, 0xac, 0xee, 0x35, 0xd8, 0xda, 0x19, 0xa2, 0xf8, 0xd6, 0xf2, 0x59, 0xee, 0x07, 0x38, 0xd5,
	0x56, 0x1f, 0xcb, 0xaa, 0x50, 0x9b, 0x16, 0xf3, 0x76, 0x82, 0x1b, 0x91, 0x57, 0x2d, 0xce, 0x11,
	0xf4, 0xb4, 0x73, 0x82, 0x95, 0x8f, 0x95, 0xc8, 0xf2, 0xb2, 0xc5, 0x1f, 0xc0, 0xb9, 0xf6, 0x7b,
	0x69, 0x7a, 0x6b, 0x56, 0xd8, 0xbe, 0x8c, 0x7a, 0xd5, 0x41, 0xda, 0x2c, 0xa3, 0x61, 0x77, 0x5a,
	0xbf, 0x7a, 0x96, 0xdd, 0x3f, 0xfe, 0x77, 0x56, 0x00, 0x7d, 0x9d, 0x15, 0xe3, 0x2a, 0x6d, 0x6e,
	0xf6, 0xe5, 0x30, 0x07, 0x4e, 0x24, 0xee, 0xaf, 0xcd, 0xe6, 0x0d, 0xbe, 0xff, 0x6d, 0xc1, 0xe0,
	0xf9, 0xdb, 0xa5, 0x7d, 0x38, 0xe5, 0x8b, 0x45, 0xb4, 0x1c, 0x73, 0xe6, 0x25, 0x8c, 0xbc, 0xa2,
	0xe7, 0x60, 0x1b, 0x61, 0xba, 0x08, 0xe6, 0xc4, 0xa2, 0x3d, 0x00, 0x83, 0x21, 0xf3, 0x3e, 0x33,
	0x72, 0x40, 0x09, 0x9c, 0x19, 0xf6, 0x59, 0x9c, 0xf0, 0xc5, 0x1d, 0x39, 0xdc, 0x35, 0xdc, 0x78,
	0x61, 0x42, 0x8e, 0xe8, 0x1b, 0x20, 0x06, 0x27, 0x2c, 0x59, 0xfa, 0x2c, 0xf1, 0x82, 0x30, 0x26,
	0xc7, 0xf4, 0x35, 0xf4, 0x8d, 0xea, 0xf9, 0xfe, 0xf2, 0x36, 0xf4, 0xee, 0x18, 0x27, 0x9d, 0x9d,
	0x75, 0x16, 0x8c, 0x67, 0x8d, 0x7a, 0x42, 0x2f, 0xe1, 0xc2, 0xa8, 0x31, 0x9b, 0xfb, 0xcb, 0x88,
	0xc5, 0xb1, 0x37, 0x61, 0xa4, 0xfb, 0xa5, 0x63, 0x7e, 0xc1, 0x4f, 0x7f, 0x02, 0x00, 0x00, 0xff,
	0xff, 0x22, 0xd0, 0xde, 0x3c, 0xf9, 0x03, 0x00, 0x00,
}