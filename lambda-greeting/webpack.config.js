const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./index.js",
  target: "node",
  externals: [nodeExternals()],
  mode: "production",
  output: {
    path: path.resolve(__dirname, ".webpack"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
};
