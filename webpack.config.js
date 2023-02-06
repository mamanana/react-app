const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // to import index.html file inside index.js
      inject: "body",
    }),
    new Dotenv({
      path: ".env",
      safe: true,
    }),
  ],
  devServer: {
    port: 3000, // you can change the port
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js and .jsx files
        exclude: /node_modules/, // excluding the node_modules folder
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // to import images and fonts
        loader: "url-loader",
        options: { limit: false },
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
          vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              enforce: true,
              chunks: 'all'
          }
      }
  }
  }
};
