const path = require("path");

module.exports = {
  target: 'node',
  entry: 'src/setupTests.js',
  output: {
    filename: "test.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          customize: require.resolve('babel-preset-react-app/webpack-overrides'),
          presets: [
            [
              require.resolve('babel-preset-react-app'),
              { runtime: 'automatic' }
            ],
          ],
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.module.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};