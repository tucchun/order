const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    'index': './src/containers/index.js',
    'vendor': ['react', 'react-dom']
  },

  // resolve: {
  //   extensions: ['.ts', '.js', '.json'],
  //   modules: [path.join(__dirname, 'src'), 'node_modules']
  // },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader',
          // 'postcss-loader'
        ]
      }, {
        test: /\.(jpg|png|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './index.ejs'),
      chunks: ['index', 'vendor', 'runtime']
    }),
    // new HtmlWebpackPlugin({
    //   // title: 'cache',
    //   filename: 'web/app.html',
    //   template: path.join(__dirname, './src/web/details.ejs'),
    //   chunks: ['web/app', 'vendor', 'runtime']
    // }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // minChunks: Infinity
      // filename: 'vendor.[chunkhash].js'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
      // filename: 'runtime.[chunkhash].js'
    })
  ]
};
