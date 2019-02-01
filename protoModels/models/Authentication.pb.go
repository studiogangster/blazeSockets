// Code generated by protoc-gen-go. DO NOT EDIT.
// source: Authentication.proto

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

type Authentication struct {
	AppId                string   `protobuf:"bytes,1,opt,name=appId,proto3" json:"appId,omitempty"`
	Version              string   `protobuf:"bytes,2,opt,name=version,proto3" json:"version,omitempty"`
	State                string   `protobuf:"bytes,3,opt,name=state,proto3" json:"state,omitempty"`
	Token                string   `protobuf:"bytes,4,opt,name=token,proto3" json:"token,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Authentication) Reset()         { *m = Authentication{} }
func (m *Authentication) String() string { return proto.CompactTextString(m) }
func (*Authentication) ProtoMessage()    {}
func (*Authentication) Descriptor() ([]byte, []int) {
	return fileDescriptor_Authentication_0546fe76faff2a6d, []int{0}
}
func (m *Authentication) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Authentication.Unmarshal(m, b)
}
func (m *Authentication) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Authentication.Marshal(b, m, deterministic)
}
func (dst *Authentication) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Authentication.Merge(dst, src)
}
func (m *Authentication) XXX_Size() int {
	return xxx_messageInfo_Authentication.Size(m)
}
func (m *Authentication) XXX_DiscardUnknown() {
	xxx_messageInfo_Authentication.DiscardUnknown(m)
}

var xxx_messageInfo_Authentication proto.InternalMessageInfo

func (m *Authentication) GetAppId() string {
	if m != nil {
		return m.AppId
	}
	return ""
}

func (m *Authentication) GetVersion() string {
	if m != nil {
		return m.Version
	}
	return ""
}

func (m *Authentication) GetState() string {
	if m != nil {
		return m.State
	}
	return ""
}

func (m *Authentication) GetToken() string {
	if m != nil {
		return m.Token
	}
	return ""
}

func init() {
	proto.RegisterType((*Authentication)(nil), "com.example.proto.Authentication")
}

func init() {
	proto.RegisterFile("Authentication.proto", fileDescriptor_Authentication_0546fe76faff2a6d)
}

var fileDescriptor_Authentication_0546fe76faff2a6d = []byte{
	// 132 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x71, 0x2c, 0x2d, 0xc9,
	0x48, 0xcd, 0x2b, 0xc9, 0x4c, 0x4e, 0x2c, 0xc9, 0xcc, 0xcf, 0xd3, 0x2b, 0x28, 0xca, 0x2f, 0xc9,
	0x17, 0x12, 0x4c, 0xce, 0xcf, 0xd5, 0x4b, 0xad, 0x48, 0xcc, 0x2d, 0xc8, 0x49, 0x85, 0x08, 0x29,
	0xe5, 0x70, 0xf1, 0xa1, 0x2a, 0x15, 0x12, 0xe1, 0x62, 0x4d, 0x2c, 0x28, 0xf0, 0x4c, 0x91, 0x60,
	0x54, 0x60, 0xd4, 0xe0, 0x0c, 0x82, 0x70, 0x84, 0x24, 0xb8, 0xd8, 0xcb, 0x52, 0x8b, 0x8a, 0x33,
	0xf3, 0xf3, 0x24, 0x98, 0xc0, 0xe2, 0x30, 0x2e, 0x48, 0x7d, 0x71, 0x49, 0x62, 0x49, 0xaa, 0x04,
	0x33, 0x44, 0x3d, 0x98, 0x03, 0x12, 0x2d, 0xc9, 0xcf, 0x4e, 0xcd, 0x93, 0x60, 0x81, 0x88, 0x82,
	0x39, 0x49, 0x6c, 0x60, 0x4b, 0x8d, 0x01, 0x01, 0x00, 0x00, 0xff, 0xff, 0x6f, 0xcc, 0x6c, 0x6d,
	0x9f, 0x00, 0x00, 0x00,
}