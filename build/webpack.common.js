const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackIncludeSiblingChunksPlugin = require('html-webpack-include-sibling-chunks-plugin')
const glob = require('glob')

const entries = glob.sync('./src/pages/**/index.js')
console.log('entries', entries)
const entry = {}
const htmlPlugins = []
const dev = process.env.NODE_ENV !== 'production'

for (const path of entries) {
  const template = path.replace('index.js', 'index.html')
  const chunkName = path.slice('./src/pages/'.length, -'/index.js'.length)
  entry[chunkName] = dev ? [path, template] : path
  htmlPlugins.push(
    new HtmlWebpackPlugin({
      template,
      filename: chunkName + '.html',
      chunksSortMode: 'none',
      chunks: [chunkName]
    })
  )
}

console.log('entry', entry)
module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: dev ? '[name].js' : '[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      '@': path.resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        include: [path.join(__dirname, '../src')],
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /.s?css$/,
        use: [
          dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src', 'link:href']
            }
          }
        ]
      },
      {
        test: /favicon\.png$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        exclude: /favicon\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[hash:8][name].[ext]',
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd()
    }),
    new webpack.HashedModuleIdsPlugin(),
    new MiniCssExtractPlugin({
      filename: dev ? '[name].css' : '[name].[hash].css',
      chunkFilename: dev ? '[id].css' : '[id].[hash].css'
    }),

    new HtmlWebpackIncludeSiblingChunksPlugin(),
    ...htmlPlugins
  ],
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  }
}
