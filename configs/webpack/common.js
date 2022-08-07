const { resolve } = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    plugins: [new TsconfigPathsPlugin()]
  },
  context: resolve(__dirname, "../../src"),
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [
                isDevelopment && require.resolve("react-refresh/babel")
              ].filter(Boolean)
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: "asset/resource"
      },
      {
        test: /\.(geojson)$/,
        loader: "json-loader"
      }
    ]
  },
  plugins: [
    new Dotenv({
      path: resolve(__dirname, "../../.env")
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "configs/_redirects",
          to: "_redirects",
          toType: "file"
        },
        {
          from: "configs/netlify.toml",
          to: "netlify.toml",
          toType: "file"
        },
        {
          from: "configs/_headers",
          to: "_headers",
          toType: "file"
        }
      ]
    }),
    new HtmlWebpackPlugin({ template: "index.html.ejs" })
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  performance: {
    hints: false
  }
};
