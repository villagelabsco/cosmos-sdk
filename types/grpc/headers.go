package grpc

const (
	// GRPCBlockHeightHeader is the gRPC header for block height.
	GRPCBlockHeightHeader = "x-cosmos-block-height"
	// GRPCViewingPermitHeader is a custom Village gRPC header for viewing permits
	// Its real nature is actually just the gRPC header for Authorization headers
	GRPCViewingPermitHeader = "grpcgateway-authorization"
)
