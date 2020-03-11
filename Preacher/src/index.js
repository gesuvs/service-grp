const path = require("path");

const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const packageDefinition = protoLoader.loadSync(
  path.resolve(__dirname, "pb", "messages.proto"),
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  }
);
const proto = grpc.loadPackageDefinition(packageDefinition);
