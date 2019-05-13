// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: GameResponse.proto

package proxy.proto.models;

public final class GameResponseOuterClass {
  private GameResponseOuterClass() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistryLite registry) {
  }

  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
    registerAllExtensions(
        (com.google.protobuf.ExtensionRegistryLite) registry);
  }
  /**
   * Protobuf enum {@code proxy.proto.models.GameResponseType}
   */
  public enum GameResponseType
      implements com.google.protobuf.ProtocolMessageEnum {
    /**
     * <code>CREATE_ROOM_RESPONSE = 0;</code>
     */
    CREATE_ROOM_RESPONSE(0),
    /**
     * <code>JOIN_ROOM_RESPONSE = 1;</code>
     */
    JOIN_ROOM_RESPONSE(1),
    /**
     * <code>LEAVE_ROOM_RESPONSE = 2;</code>
     */
    LEAVE_ROOM_RESPONSE(2),
    /**
     * <code>DESTROY_ROOM_RESPONSE = 3;</code>
     */
    DESTROY_ROOM_RESPONSE(3),
    /**
     * <code>HALT_ROOM_RESPONSE = 4;</code>
     */
    HALT_ROOM_RESPONSE(4),
    /**
     * <code>GET_ROOMS_RESPONSE = 5;</code>
     */
    GET_ROOMS_RESPONSE(5),
    /**
     * <code>GET_ROOM_DETAILS_RESPONSE = 6;</code>
     */
    GET_ROOM_DETAILS_RESPONSE(6),
    /**
     * <code>KICK_PLAYER_FROM_ROOM_RESPONSE = 7;</code>
     */
    KICK_PLAYER_FROM_ROOM_RESPONSE(7),
    /**
     * <code>SEND_MESSAGE_RESPONSE = 8;</code>
     */
    SEND_MESSAGE_RESPONSE(8),
    /**
     * <code>GET_STATUS_RESPONSE = 9;</code>
     */
    GET_STATUS_RESPONSE(9),
    UNRECOGNIZED(-1),
    ;

    /**
     * <code>CREATE_ROOM_RESPONSE = 0;</code>
     */
    public static final int CREATE_ROOM_RESPONSE_VALUE = 0;
    /**
     * <code>JOIN_ROOM_RESPONSE = 1;</code>
     */
    public static final int JOIN_ROOM_RESPONSE_VALUE = 1;
    /**
     * <code>LEAVE_ROOM_RESPONSE = 2;</code>
     */
    public static final int LEAVE_ROOM_RESPONSE_VALUE = 2;
    /**
     * <code>DESTROY_ROOM_RESPONSE = 3;</code>
     */
    public static final int DESTROY_ROOM_RESPONSE_VALUE = 3;
    /**
     * <code>HALT_ROOM_RESPONSE = 4;</code>
     */
    public static final int HALT_ROOM_RESPONSE_VALUE = 4;
    /**
     * <code>GET_ROOMS_RESPONSE = 5;</code>
     */
    public static final int GET_ROOMS_RESPONSE_VALUE = 5;
    /**
     * <code>GET_ROOM_DETAILS_RESPONSE = 6;</code>
     */
    public static final int GET_ROOM_DETAILS_RESPONSE_VALUE = 6;
    /**
     * <code>KICK_PLAYER_FROM_ROOM_RESPONSE = 7;</code>
     */
    public static final int KICK_PLAYER_FROM_ROOM_RESPONSE_VALUE = 7;
    /**
     * <code>SEND_MESSAGE_RESPONSE = 8;</code>
     */
    public static final int SEND_MESSAGE_RESPONSE_VALUE = 8;
    /**
     * <code>GET_STATUS_RESPONSE = 9;</code>
     */
    public static final int GET_STATUS_RESPONSE_VALUE = 9;


    public final int getNumber() {
      if (this == UNRECOGNIZED) {
        throw new java.lang.IllegalArgumentException(
            "Can't get the number of an unknown enum value.");
      }
      return value;
    }

    /**
     * @deprecated Use {@link #forNumber(int)} instead.
     */
    @java.lang.Deprecated
    public static GameResponseType valueOf(int value) {
      return forNumber(value);
    }

    public static GameResponseType forNumber(int value) {
      switch (value) {
        case 0: return CREATE_ROOM_RESPONSE;
        case 1: return JOIN_ROOM_RESPONSE;
        case 2: return LEAVE_ROOM_RESPONSE;
        case 3: return DESTROY_ROOM_RESPONSE;
        case 4: return HALT_ROOM_RESPONSE;
        case 5: return GET_ROOMS_RESPONSE;
        case 6: return GET_ROOM_DETAILS_RESPONSE;
        case 7: return KICK_PLAYER_FROM_ROOM_RESPONSE;
        case 8: return SEND_MESSAGE_RESPONSE;
        case 9: return GET_STATUS_RESPONSE;
        default: return null;
      }
    }

    public static com.google.protobuf.Internal.EnumLiteMap<GameResponseType>
        internalGetValueMap() {
      return internalValueMap;
    }
    private static final com.google.protobuf.Internal.EnumLiteMap<
        GameResponseType> internalValueMap =
          new com.google.protobuf.Internal.EnumLiteMap<GameResponseType>() {
            public GameResponseType findValueByNumber(int number) {
              return GameResponseType.forNumber(number);
            }
          };

    public final com.google.protobuf.Descriptors.EnumValueDescriptor
        getValueDescriptor() {
      return getDescriptor().getValues().get(ordinal());
    }
    public final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptorForType() {
      return getDescriptor();
    }
    public static final com.google.protobuf.Descriptors.EnumDescriptor
        getDescriptor() {
      return proxy.proto.models.GameResponseOuterClass.getDescriptor().getEnumTypes().get(0);
    }

    private static final GameResponseType[] VALUES = values();

    public static GameResponseType valueOf(
        com.google.protobuf.Descriptors.EnumValueDescriptor desc) {
      if (desc.getType() != getDescriptor()) {
        throw new java.lang.IllegalArgumentException(
          "EnumValueDescriptor is not for this type.");
      }
      if (desc.getIndex() == -1) {
        return UNRECOGNIZED;
      }
      return VALUES[desc.getIndex()];
    }

    private final int value;

    private GameResponseType(int value) {
      this.value = value;
    }

    // @@protoc_insertion_point(enum_scope:proxy.proto.models.GameResponseType)
  }

  public interface GameResponseOrBuilder extends
      // @@protoc_insertion_point(interface_extends:proxy.proto.models.GameResponse)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>.proxy.proto.models.GameResponseType gameResponseType = 1;</code>
     */
    int getGameResponseTypeValue();
    /**
     * <code>.proxy.proto.models.GameResponseType gameResponseType = 1;</code>
     */
    proxy.proto.models.GameResponseOuterClass.GameResponseType getGameResponseType();

    /**
     * <code>bool success = 2;</code>
     */
    boolean getSuccess();

    /**
     * <code>bytes messsage = 3;</code>
     */
    com.google.protobuf.ByteString getMesssage();

    /**
     * <code>string name = 4;</code>
     */
    java.lang.String getName();
    /**
     * <code>string name = 4;</code>
     */
    com.google.protobuf.ByteString
        getNameBytes();
  }
  /**
   * Protobuf type {@code proxy.proto.models.GameResponse}
   */
  public  static final class GameResponse extends
      com.google.protobuf.GeneratedMessageV3 implements
      // @@protoc_insertion_point(message_implements:proxy.proto.models.GameResponse)
      GameResponseOrBuilder {
  private static final long serialVersionUID = 0L;
    // Use GameResponse.newBuilder() to construct.
    private GameResponse(com.google.protobuf.GeneratedMessageV3.Builder<?> builder) {
      super(builder);
    }
    private GameResponse() {
      gameResponseType_ = 0;
      success_ = false;
      messsage_ = com.google.protobuf.ByteString.EMPTY;
      name_ = "";
    }

    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
    getUnknownFields() {
      return this.unknownFields;
    }
    private GameResponse(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      this();
      if (extensionRegistry == null) {
        throw new java.lang.NullPointerException();
      }
      int mutable_bitField0_ = 0;
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            case 8: {
              int rawValue = input.readEnum();

              gameResponseType_ = rawValue;
              break;
            }
            case 16: {

              success_ = input.readBool();
              break;
            }
            case 26: {

              messsage_ = input.readBytes();
              break;
            }
            case 34: {
              java.lang.String s = input.readStringRequireUtf8();

              name_ = s;
              break;
            }
            default: {
              if (!parseUnknownFieldProto3(
                  input, unknownFields, extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e).setUnfinishedMessage(this);
      } finally {
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return proxy.proto.models.GameResponseOuterClass.internal_static_proxy_proto_models_GameResponse_descriptor;
    }

    @java.lang.Override
    protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return proxy.proto.models.GameResponseOuterClass.internal_static_proxy_proto_models_GameResponse_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              proxy.proto.models.GameResponseOuterClass.GameResponse.class, proxy.proto.models.GameResponseOuterClass.GameResponse.Builder.class);
    }

    public static final int GAMERESPONSETYPE_FIELD_NUMBER = 1;
    private int gameResponseType_;
    /**
     * <code>.proxy.proto.models.GameResponseType gameResponseType = 1;</code>
     */
    public int getGameResponseTypeValue() {
      return gameResponseType_;
    }
    /**
     * <code>.proxy.proto.models.GameResponseType gameResponseType = 1;</code>
     */
    public proxy.proto.models.GameResponseOuterClass.GameResponseType getGameResponseType() {
      @SuppressWarnings("deprecation")
      proxy.proto.models.GameResponseOuterClass.GameResponseType result = proxy.proto.models.GameResponseOuterClass.GameResponseType.valueOf(gameResponseType_);
      return result == null ? proxy.proto.models.GameResponseOuterClass.GameResponseType.UNRECOGNIZED : result;
    }

    public static final int SUCCESS_FIELD_NUMBER = 2;
    private boolean success_;
    /**
     * <code>bool success = 2;</code>
     */
    public boolean getSuccess() {
      return success_;
    }

    public static final int MESSSAGE_FIELD_NUMBER = 3;
    private com.google.protobuf.ByteString messsage_;
    /**
     * <code>bytes messsage = 3;</code>
     */
    public com.google.protobuf.ByteString getMesssage() {
      return messsage_;
    }

    public static final int NAME_FIELD_NUMBER = 4;
    private volatile java.lang.Object name_;
    /**
     * <code>string name = 4;</code>
     */
    public java.lang.String getName() {
      java.lang.Object ref = name_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        name_ = s;
        return s;
      }
    }
    /**
     * <code>string name = 4;</code>
     */
    public com.google.protobuf.ByteString
        getNameBytes() {
      java.lang.Object ref = name_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        name_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    private byte memoizedIsInitialized = -1;
    @java.lang.Override
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      memoizedIsInitialized = 1;
      return true;
    }

    @java.lang.Override
    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      if (gameResponseType_ != proxy.proto.models.GameResponseOuterClass.GameResponseType.CREATE_ROOM_RESPONSE.getNumber()) {
        output.writeEnum(1, gameResponseType_);
      }
      if (success_ != false) {
        output.writeBool(2, success_);
      }
      if (!messsage_.isEmpty()) {
        output.writeBytes(3, messsage_);
      }
      if (!getNameBytes().isEmpty()) {
        com.google.protobuf.GeneratedMessageV3.writeString(output, 4, name_);
      }
      unknownFields.writeTo(output);
    }

    @java.lang.Override
    public int getSerializedSize() {
      int size = memoizedSize;
      if (size != -1) return size;

      size = 0;
      if (gameResponseType_ != proxy.proto.models.GameResponseOuterClass.GameResponseType.CREATE_ROOM_RESPONSE.getNumber()) {
        size += com.google.protobuf.CodedOutputStream
          .computeEnumSize(1, gameResponseType_);
      }
      if (success_ != false) {
        size += com.google.protobuf.CodedOutputStream
          .computeBoolSize(2, success_);
      }
      if (!messsage_.isEmpty()) {
        size += com.google.protobuf.CodedOutputStream
          .computeBytesSize(3, messsage_);
      }
      if (!getNameBytes().isEmpty()) {
        size += com.google.protobuf.GeneratedMessageV3.computeStringSize(4, name_);
      }
      size += unknownFields.getSerializedSize();
      memoizedSize = size;
      return size;
    }

    @java.lang.Override
    public boolean equals(final java.lang.Object obj) {
      if (obj == this) {
       return true;
      }
      if (!(obj instanceof proxy.proto.models.GameResponseOuterClass.GameResponse)) {
        return super.equals(obj);
      }
      proxy.proto.models.GameResponseOuterClass.GameResponse other = (proxy.proto.models.GameResponseOuterClass.GameResponse) obj;

      boolean result = true;
      result = result && gameResponseType_ == other.gameResponseType_;
      result = result && (getSuccess()
          == other.getSuccess());
      result = result && getMesssage()
          .equals(other.getMesssage());
      result = result && getName()
          .equals(other.getName());
      result = result && unknownFields.equals(other.unknownFields);
      return result;
    }

    @java.lang.Override
    public int hashCode() {
      if (memoizedHashCode != 0) {
        return memoizedHashCode;
      }
      int hash = 41;
      hash = (19 * hash) + getDescriptor().hashCode();
      hash = (37 * hash) + GAMERESPONSETYPE_FIELD_NUMBER;
      hash = (53 * hash) + gameResponseType_;
      hash = (37 * hash) + SUCCESS_FIELD_NUMBER;
      hash = (53 * hash) + com.google.protobuf.Internal.hashBoolean(
          getSuccess());
      hash = (37 * hash) + MESSSAGE_FIELD_NUMBER;
      hash = (53 * hash) + getMesssage().hashCode();
      hash = (37 * hash) + NAME_FIELD_NUMBER;
      hash = (53 * hash) + getName().hashCode();
      hash = (29 * hash) + unknownFields.hashCode();
      memoizedHashCode = hash;
      return hash;
    }

    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(
        java.nio.ByteBuffer data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(
        java.nio.ByteBuffer data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseDelimitedWithIOException(PARSER, input, extensionRegistry);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input);
    }
    public static proxy.proto.models.GameResponseOuterClass.GameResponse parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return com.google.protobuf.GeneratedMessageV3
          .parseWithIOException(PARSER, input, extensionRegistry);
    }

    @java.lang.Override
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder() {
      return DEFAULT_INSTANCE.toBuilder();
    }
    public static Builder newBuilder(proxy.proto.models.GameResponseOuterClass.GameResponse prototype) {
      return DEFAULT_INSTANCE.toBuilder().mergeFrom(prototype);
    }
    @java.lang.Override
    public Builder toBuilder() {
      return this == DEFAULT_INSTANCE
          ? new Builder() : new Builder().mergeFrom(this);
    }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * Protobuf type {@code proxy.proto.models.GameResponse}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessageV3.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:proxy.proto.models.GameResponse)
        proxy.proto.models.GameResponseOuterClass.GameResponseOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return proxy.proto.models.GameResponseOuterClass.internal_static_proxy_proto_models_GameResponse_descriptor;
      }

      @java.lang.Override
      protected com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return proxy.proto.models.GameResponseOuterClass.internal_static_proxy_proto_models_GameResponse_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                proxy.proto.models.GameResponseOuterClass.GameResponse.class, proxy.proto.models.GameResponseOuterClass.GameResponse.Builder.class);
      }

      // Construct using proxy.proto.models.GameResponseOuterClass.GameResponse.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessageV3.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessageV3
                .alwaysUseFieldBuilders) {
        }
      }
      @java.lang.Override
      public Builder clear() {
        super.clear();
        gameResponseType_ = 0;

        success_ = false;

        messsage_ = com.google.protobuf.ByteString.EMPTY;

        name_ = "";

        return this;
      }

      @java.lang.Override
      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return proxy.proto.models.GameResponseOuterClass.internal_static_proxy_proto_models_GameResponse_descriptor;
      }

      @java.lang.Override
      public proxy.proto.models.GameResponseOuterClass.GameResponse getDefaultInstanceForType() {
        return proxy.proto.models.GameResponseOuterClass.GameResponse.getDefaultInstance();
      }

      @java.lang.Override
      public proxy.proto.models.GameResponseOuterClass.GameResponse build() {
        proxy.proto.models.GameResponseOuterClass.GameResponse result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      @java.lang.Override
      public proxy.proto.models.GameResponseOuterClass.GameResponse buildPartial() {
        proxy.proto.models.GameResponseOuterClass.GameResponse result = new proxy.proto.models.GameResponseOuterClass.GameResponse(this);
        result.gameResponseType_ = gameResponseType_;
        result.success_ = success_;
        result.messsage_ = messsage_;
        result.name_ = name_;
        onBuilt();
        return result;
      }

      @java.lang.Override
      public Builder clone() {
        return (Builder) super.clone();
      }
      @java.lang.Override
      public Builder setField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return (Builder) super.setField(field, value);
      }
      @java.lang.Override
      public Builder clearField(
          com.google.protobuf.Descriptors.FieldDescriptor field) {
        return (Builder) super.clearField(field);
      }
      @java.lang.Override
      public Builder clearOneof(
          com.google.protobuf.Descriptors.OneofDescriptor oneof) {
        return (Builder) super.clearOneof(oneof);
      }
      @java.lang.Override
      public Builder setRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          int index, java.lang.Object value) {
        return (Builder) super.setRepeatedField(field, index, value);
      }
      @java.lang.Override
      public Builder addRepeatedField(
          com.google.protobuf.Descriptors.FieldDescriptor field,
          java.lang.Object value) {
        return (Builder) super.addRepeatedField(field, value);
      }
      @java.lang.Override
      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof proxy.proto.models.GameResponseOuterClass.GameResponse) {
          return mergeFrom((proxy.proto.models.GameResponseOuterClass.GameResponse)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(proxy.proto.models.GameResponseOuterClass.GameResponse other) {
        if (other == proxy.proto.models.GameResponseOuterClass.GameResponse.getDefaultInstance()) return this;
        if (other.gameResponseType_ != 0) {
          setGameResponseTypeValue(other.getGameResponseTypeValue());
        }
        if (other.getSuccess() != false) {
          setSuccess(other.getSuccess());
        }
        if (other.getMesssage() != com.google.protobuf.ByteString.EMPTY) {
          setMesssage(other.getMesssage());
        }
        if (!other.getName().isEmpty()) {
          name_ = other.name_;
          onChanged();
        }
        this.mergeUnknownFields(other.unknownFields);
        onChanged();
        return this;
      }

      @java.lang.Override
      public final boolean isInitialized() {
        return true;
      }

      @java.lang.Override
      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        proxy.proto.models.GameResponseOuterClass.GameResponse parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (proxy.proto.models.GameResponseOuterClass.GameResponse) e.getUnfinishedMessage();
          throw e.unwrapIOException();
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }

      private int gameResponseType_ = 0;
      /**
       * <code>.proxy.proto.models.GameResponseType gameResponseType = 1;</code>
       */
      public int getGameResponseTypeValue() {
        return gameResponseType_;
      }
      /**
       * <code>.proxy.proto.models.GameResponseType gameResponseType = 1;</code>
       */
      public Builder setGameResponseTypeValue(int value) {
        gameResponseType_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>.proxy.proto.models.GameResponseType gameResponseType = 1;</code>
       */
      public proxy.proto.models.GameResponseOuterClass.GameResponseType getGameResponseType() {
        @SuppressWarnings("deprecation")
        proxy.proto.models.GameResponseOuterClass.GameResponseType result = proxy.proto.models.GameResponseOuterClass.GameResponseType.valueOf(gameResponseType_);
        return result == null ? proxy.proto.models.GameResponseOuterClass.GameResponseType.UNRECOGNIZED : result;
      }
      /**
       * <code>.proxy.proto.models.GameResponseType gameResponseType = 1;</code>
       */
      public Builder setGameResponseType(proxy.proto.models.GameResponseOuterClass.GameResponseType value) {
        if (value == null) {
          throw new NullPointerException();
        }
        
        gameResponseType_ = value.getNumber();
        onChanged();
        return this;
      }
      /**
       * <code>.proxy.proto.models.GameResponseType gameResponseType = 1;</code>
       */
      public Builder clearGameResponseType() {
        
        gameResponseType_ = 0;
        onChanged();
        return this;
      }

      private boolean success_ ;
      /**
       * <code>bool success = 2;</code>
       */
      public boolean getSuccess() {
        return success_;
      }
      /**
       * <code>bool success = 2;</code>
       */
      public Builder setSuccess(boolean value) {
        
        success_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>bool success = 2;</code>
       */
      public Builder clearSuccess() {
        
        success_ = false;
        onChanged();
        return this;
      }

      private com.google.protobuf.ByteString messsage_ = com.google.protobuf.ByteString.EMPTY;
      /**
       * <code>bytes messsage = 3;</code>
       */
      public com.google.protobuf.ByteString getMesssage() {
        return messsage_;
      }
      /**
       * <code>bytes messsage = 3;</code>
       */
      public Builder setMesssage(com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        messsage_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>bytes messsage = 3;</code>
       */
      public Builder clearMesssage() {
        
        messsage_ = getDefaultInstance().getMesssage();
        onChanged();
        return this;
      }

      private java.lang.Object name_ = "";
      /**
       * <code>string name = 4;</code>
       */
      public java.lang.String getName() {
        java.lang.Object ref = name_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          name_ = s;
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>string name = 4;</code>
       */
      public com.google.protobuf.ByteString
          getNameBytes() {
        java.lang.Object ref = name_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          name_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>string name = 4;</code>
       */
      public Builder setName(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  
        name_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>string name = 4;</code>
       */
      public Builder clearName() {
        
        name_ = getDefaultInstance().getName();
        onChanged();
        return this;
      }
      /**
       * <code>string name = 4;</code>
       */
      public Builder setNameBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  checkByteStringIsUtf8(value);
        
        name_ = value;
        onChanged();
        return this;
      }
      @java.lang.Override
      public final Builder setUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.setUnknownFieldsProto3(unknownFields);
      }

      @java.lang.Override
      public final Builder mergeUnknownFields(
          final com.google.protobuf.UnknownFieldSet unknownFields) {
        return super.mergeUnknownFields(unknownFields);
      }


      // @@protoc_insertion_point(builder_scope:proxy.proto.models.GameResponse)
    }

    // @@protoc_insertion_point(class_scope:proxy.proto.models.GameResponse)
    private static final proxy.proto.models.GameResponseOuterClass.GameResponse DEFAULT_INSTANCE;
    static {
      DEFAULT_INSTANCE = new proxy.proto.models.GameResponseOuterClass.GameResponse();
    }

    public static proxy.proto.models.GameResponseOuterClass.GameResponse getDefaultInstance() {
      return DEFAULT_INSTANCE;
    }

    private static final com.google.protobuf.Parser<GameResponse>
        PARSER = new com.google.protobuf.AbstractParser<GameResponse>() {
      @java.lang.Override
      public GameResponse parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new GameResponse(input, extensionRegistry);
      }
    };

    public static com.google.protobuf.Parser<GameResponse> parser() {
      return PARSER;
    }

    @java.lang.Override
    public com.google.protobuf.Parser<GameResponse> getParserForType() {
      return PARSER;
    }

    @java.lang.Override
    public proxy.proto.models.GameResponseOuterClass.GameResponse getDefaultInstanceForType() {
      return DEFAULT_INSTANCE;
    }

  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_proxy_proto_models_GameResponse_descriptor;
  private static final 
    com.google.protobuf.GeneratedMessageV3.FieldAccessorTable
      internal_static_proxy_proto_models_GameResponse_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static  com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\022GameResponse.proto\022\022proxy.proto.models" +
      "\"\177\n\014GameResponse\022>\n\020gameResponseType\030\001 \001" +
      "(\0162$.proxy.proto.models.GameResponseType" +
      "\022\017\n\007success\030\002 \001(\010\022\020\n\010messsage\030\003 \001(\014\022\014\n\004n" +
      "ame\030\004 \001(\t*\237\002\n\020GameResponseType\022\030\n\024CREATE" +
      "_ROOM_RESPONSE\020\000\022\026\n\022JOIN_ROOM_RESPONSE\020\001" +
      "\022\027\n\023LEAVE_ROOM_RESPONSE\020\002\022\031\n\025DESTROY_ROO" +
      "M_RESPONSE\020\003\022\026\n\022HALT_ROOM_RESPONSE\020\004\022\026\n\022" +
      "GET_ROOMS_RESPONSE\020\005\022\035\n\031GET_ROOM_DETAILS" +
      "_RESPONSE\020\006\022\"\n\036KICK_PLAYER_FROM_ROOM_RES" +
      "PONSE\020\007\022\031\n\025SEND_MESSAGE_RESPONSE\020\010\022\027\n\023GE" +
      "T_STATUS_RESPONSE\020\tb\006proto3"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_proxy_proto_models_GameResponse_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_proxy_proto_models_GameResponse_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessageV3.FieldAccessorTable(
        internal_static_proxy_proto_models_GameResponse_descriptor,
        new java.lang.String[] { "GameResponseType", "Success", "Messsage", "Name", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}