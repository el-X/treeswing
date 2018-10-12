const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "src"),
  build: path.join(__dirname, "build")
};

module.exports = {
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: "[name].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "TreeSwing",
      favicon: `${PATHS.app}/assets/favicon.ico`,
      template: `${PATHS.app}/index.html`,
      inject: "head"
    })
  ],
  devServer: {
    overlay: {
      errors: true,
      warnings: false
    }
  },
  performance: { hints: false },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          emitwarning: true
        }
      },
      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            interpolate: true
          }
        }
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|obj|mtl)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/[name].[ext]"
          }
        }
      },
      {
        test: /\.s?css$/i,
        use: ["style-loader", "css-loader?sourceMap=true", "sass-loader"]
      }
    ]
  }
};
