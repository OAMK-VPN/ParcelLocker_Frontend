var path = require('path');
var testInitPath = path.resolve('src/setupTests.js')

module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    frameworks: ['jasmine'],
    files: [
      testInitPath
    ],
    preprocessors: {
      [testInitPath]: [
        // use karma-webpack to preprocess the file via webpack
        'webpack', 'sourcemap'
      ]
    },
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    // webpack configuration used by karma-webpack
    webpack: {
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
            test: /\.png|svg|jpg|gif$/,
            use: ["file-loader"],
          },
        ],
      }
    },

    webpackMiddleware: {
      // only output webpack error messages
      stats: 'errors-only',
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000, // customize depending on PC power
      }
    },
  })
}