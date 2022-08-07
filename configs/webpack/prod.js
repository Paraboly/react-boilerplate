const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const commonConfig = require("./common");

module.exports = merge(commonConfig, {
  mode: "production",
  entry: "./index.tsx",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/"
  },
  plugins: [],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new HtmlMinimizerPlugin(), "..."],
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            );
            if (packageName) {
              return `npm.${packageName[1].replace("@", "")}`;
            }
          }
        }
      }
    }
  }
});
