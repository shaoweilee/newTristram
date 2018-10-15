const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // devtool: 'source-map',
  devtool: 'false',
  mode: 'production',
  entry: {
    index: './src/index.js',
    search: './src/pages/search/index.js',
    detail: './src/pages/detail/index.js',
  },
  output: {
    filename: '[name]_[chunkhash:8].js',
    chunkFilename: '[name]_[chunkhash:8].js',
    path: `${__dirname}/server/public/dist`,
    // publicPath: 'http://123.206.55.41/static/dist/',
    publicPath: 'http://www.herosanctuary.com/static/dist/',
    // publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif|gif|eot|svg|ttf|woff)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: ['style-loader'],
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            // { loader: 'css-loader', options: { modules: true, localIdentName: '[name]_[local]_[hash:base64:5]' } },
            // 'postcss-loader',
            'css-loader',
            'sass-loader',
          ],
          fallback: ['style-loader'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name]_[chunkhash:8].css',
    }),
    new CleanWebpackPlugin(['server/public/dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      template: './src/pages/search/index.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: './src/pages/detail/index.html',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // 提取 node_modules 中代码
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        commons: {
          // async 设置提取异步代码中的公用代码
          chunks: 'async',
          name: 'commons-async',
          minSize: 0,
          minChunks: 2
        }
      },
    },
    runtimeChunk: {
      name: 'mainfest'
    }
  },
};