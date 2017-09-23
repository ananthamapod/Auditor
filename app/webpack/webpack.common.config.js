const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, '..', 'dist')
const APP_DIR = path.resolve(__dirname, '..', 'src')

var config = {
  entry: {
    vendor: ['siimple', 'react', 'react-dom', 'react-redux', 'redux'],
    app: ['babel-polyfill', APP_DIR]
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: APP_DIR,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([
                  require('autoprefixer')()
                ])
              }
            },
            'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.css$/,
        include: '/',
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => ([
                  require('autoprefixer')()
                ])
              }
            }
          ],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.pug|\.jade$/,
        include: APP_DIR,
        loader: 'pug-loader'
      }
    ]
  },
  plugins : [
    new ExtractTextPlugin("[name].css"),
    new HtmlWebpackPlugin({
      template: APP_DIR + '/index.pug',
      title: 'Auditor',
      inject: 'body'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: ({resource}) => (
        resource &&
        resource.indexOf('node_modules') >= 0 &&
        resource.match(/\.js$/)
      )
    })
  ]
}

module.exports = config
