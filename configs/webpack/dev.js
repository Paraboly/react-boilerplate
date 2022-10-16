const { resolve } = require("path");
const { merge } = require("webpack-merge");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
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
    new ReactRefreshWebpackPlugin(),
    new ESLintPlugin({
      context: resolve(__dirname, "../../src"),
      extensions: ["ts", "tsx"],
      emitError: true,
      emitWarning: true,
      failOnError: true,
      failOnWarning: false
    })
  ]
});
