// Code generated by protoc-gen-go. DO NOT EDIT.
// source: Notification.proto

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

type NotificationIntent int32

const (
	NotificationIntent_OPEN_APP        NotificationIntent = 0
	NotificationIntent_DO_NOTHING      NotificationIntent = 1
	NotificationIntent_OPEN_CONTAINER  NotificationIntent = 2
	NotificationIntent_OPEN_STORE_LINK NotificationIntent = 3
)

var NotificationIntent_name = map[int32]string{
	0: "OPEN_APP",
	1: "DO_NOTHING",
	2: "OPEN_CONTAINER",
	3: "OPEN_STORE_LINK",
}
var NotificationIntent_value = map[string]int32{
	"OPEN_APP":        0,
	"DO_NOTHING":      1,
	"OPEN_CONTAINER":  2,
	"OPEN_STORE_LINK": 3,
}

func (x NotificationIntent) String() string {
	return proto.EnumName(NotificationIntent_name, int32(x))
}
func (NotificationIntent) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor_Notification_0620b70bc1756421, []int{0}
}

type Notification struct {
	AppId                string             `protobuf:"bytes,1,opt,name=appId,proto3" json:"appId,omitempty"`
	Title                string             `protobuf:"bytes,2,opt,name=title,proto3" json:"title,omitempty"`
	SDesc                string             `protobuf:"bytes,3,opt,name=sDesc,proto3" json:"sDesc,omitempty"`
	Desc                 string             `protobuf:"bytes,4,opt,name=Desc,proto3" json:"Desc,omitempty"`
	Intent               NotificationIntent `protobuf:"varint,5,opt,name=intent,proto3,enum=com.example.proto.NotificationIntent" json:"intent,omitempty"`
	ShowIfInstalled      bool               `protobuf:"varint,6,opt,name=showIfInstalled,proto3" json:"showIfInstalled,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *Notification) Reset()         { *m = Notification{} }
func (m *Notification) String() string { return proto.CompactTextString(m) }
func (*Notification) ProtoMessage()    {}
func (*Notification) Descriptor() ([]byte, []int) {
	return fileDescriptor_Notification_0620b70bc1756421, []int{0}
}
func (m *Notification) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Notification.Unmarshal(m, b)
}
func (m *Notification) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Notification.Marshal(b, m, deterministic)
}
func (dst *Notification) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Notification.Merge(dst, src)
}
func (m *Notification) XXX_Size() int {
	return xxx_messageInfo_Notification.Size(m)
}
func (m *Notification) XXX_DiscardUnknown() {
	xxx_messageInfo_Notification.DiscardUnknown(m)
}

var xxx_messageInfo_Notification proto.InternalMessageInfo

func (m *Notification) GetAppId() string {
	if m != nil {
		return m.AppId
	}
	return ""
}

func (m *Notification) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *Notification) GetSDesc() string {
	if m != nil {
		return m.SDesc
	}
	return ""
}

func (m *Notification) GetDesc() string {
	if m != nil {
		return m.Desc
	}
	return ""
}

func (m *Notification) GetIntent() NotificationIntent {
	if m != nil {
		return m.Intent
	}
	return NotificationIntent_OPEN_APP
}

func (m *Notification) GetShowIfInstalled() bool {
	if m != nil {
		return m.ShowIfInstalled
	}
	return false
}

func init() {
	proto.RegisterType((*Notification)(nil), "com.example.proto.Notification")
	proto.RegisterEnum("com.example.proto.NotificationIntent", NotificationIntent_name, NotificationIntent_value)
}

func init() { proto.RegisterFile("Notification.proto", fileDescriptor_Notification_0620b70bc1756421) }

var fileDescriptor_Notification_0620b70bc1756421 = []byte{
	// 251 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0xcf, 0x4f, 0x4b, 0xf4, 0x30,
	0x10, 0x06, 0xf0, 0x37, 0xfb, 0xa7, 0xec, 0x3b, 0x2c, 0xdd, 0x3a, 0x7a, 0xc8, 0xb1, 0x08, 0x42,
	0xf1, 0xd0, 0x83, 0x9e, 0x3d, 0x2c, 0x6e, 0xd1, 0xa0, 0x24, 0x25, 0xf6, 0xe6, 0xa1, 0xd4, 0x6e,
	0x16, 0x03, 0xdd, 0xa6, 0xd8, 0x80, 0x7e, 0x49, 0xbf, 0x93, 0xec, 0xc4, 0xc3, 0xaa, 0xb7, 0x3c,
	0xbf, 0x4c, 0xc2, 0x33, 0x80, 0xd2, 0x79, 0xbb, 0xb3, 0x6d, 0xe3, 0xad, 0xeb, 0xf3, 0xe1, 0xcd,
	0x79, 0x87, 0x27, 0xad, 0xdb, 0xe7, 0xe6, 0xa3, 0xd9, 0x0f, 0x9d, 0x09, 0x74, 0xfe, 0xc9, 0x60,
	0x79, 0x3c, 0x89, 0x67, 0x30, 0x6f, 0x86, 0x41, 0x6c, 0x39, 0x4b, 0x59, 0xf6, 0x5f, 0x87, 0x70,
	0x50, 0x6f, 0x7d, 0x67, 0xf8, 0x24, 0x28, 0x85, 0x83, 0x8e, 0x1b, 0x33, 0xb6, 0x7c, 0x1a, 0x94,
	0x02, 0x22, 0xcc, 0x08, 0x67, 0x84, 0x74, 0xc6, 0x1b, 0x88, 0x6c, 0xef, 0x4d, 0xef, 0xf9, 0x3c,
	0x65, 0x59, 0x7c, 0x75, 0x91, 0xff, 0xa9, 0x92, 0x1f, 0xd7, 0x10, 0x34, 0xac, 0xbf, 0x1f, 0x61,
	0x06, 0xab, 0xf1, 0xd5, 0xbd, 0x8b, 0x9d, 0xe8, 0x47, 0xdf, 0x74, 0x9d, 0xd9, 0xf2, 0x28, 0x65,
	0xd9, 0x42, 0xff, 0xe6, 0xcb, 0xe7, 0x9f, 0x8b, 0x87, 0x7f, 0x70, 0x09, 0x0b, 0x55, 0x16, 0xb2,
	0x5e, 0x97, 0x65, 0xf2, 0x0f, 0x63, 0x80, 0x8d, 0xaa, 0xa5, 0xaa, 0xee, 0x85, 0xbc, 0x4b, 0x18,
	0x22, 0xc4, 0x74, 0x7b, 0xab, 0x64, 0xb5, 0x16, 0xb2, 0xd0, 0xc9, 0x04, 0x4f, 0x61, 0x45, 0xf6,
	0x54, 0x29, 0x5d, 0xd4, 0x8f, 0x42, 0x3e, 0x24, 0xd3, 0x97, 0x88, 0x8a, 0x5e, 0x7f, 0x05, 0x00,
	0x00, 0xff, 0xff, 0x31, 0x90, 0x0f, 0xe7, 0x5c, 0x01, 0x00, 0x00,
}