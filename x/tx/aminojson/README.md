### go-amino/encoding-json behavior

Types which implement the interface method `cosmos-sdk/codec.AminoMarshaler.MarshalAminoJSON` will be
marshaled using that method instead of the default JSON encoding.  This is called by [reflection](https://github.com/tendermint/go-amino/blob/01b51bd47ba0f0bedebea6e8174484ff7863b282/reflect.go#L232). We will
find feature parity through the [amino.encoding](https://github.com/cosmos/cosmos-sdk/blob/b49f948b36bc991db5be431607b475633aed697e/proto/amino/amino.proto#L30encoding)  and/or `amino.message_encoding` annotations.

The same seems to be true for `encoding/json.Marshaler.MarshalJSON` and `MarshalAmino`.

Note that go-amino [special cases byte arrays](https://github.com/tendermint/go-amino/blob/ccb15b138dfd74282be78f5e9059387768b12918/json-encode.go#L231) to support e.g. key serialization.  This odd feature must be
included for total feature parity.

look to `std.RegisterLegacyAminoCodec(amino)` for current usages and registration of the codec
amino map serialization is non-deterministic

- structurally follow legacy amino json encoding
- refer to stablejson for protoreflect details translating golang reflect -> protoreflect
- add special casing custom encoders (including tests)
- add rapid tests
- refactor for readability. not really convinced stablejson is anymore readable than amino json yet
- check timestamp special casing is equivalent

- ensure all usages of gogoproto.nullable are augmented with amino.dont_omitempty