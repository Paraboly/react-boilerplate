// development config
const { resolve } = require("path");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const commonConfig = require("./common");
const env = require("dotenv").config({
  path: resolve(__dirname, "../../.env")
}).parsed;
const PORT = env?.PORT || 2999;

module.exports = merge(commonConfig, {
  mode: "development",
  entry: [
    `webpack-dev-server/client?http://localhost:${PORT}`,
    "webpack/hot/dev-server",
    "./index.tsx"
  ],
  devServer: {
    hot: true,
    port: PORT,
    historyApiFallback: {
      disableDotRule: true
    },
    proxy: {
      context: ["/api"],
      target: env?.API_ADDRESS,
      secure: false,
      changeOrigin: true,
      logLevel: "debug"
    }
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new ReactRefreshWebpackPlugin()
  ]
});
