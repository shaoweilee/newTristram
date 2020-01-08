const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: {
    'babel-polyfill': 'babel-polyfill',
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: `${__dirname}/dist`,
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    host: '192.168.42.120',
    port: '1001',
    historyApiFallback: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpe?g|gif|eot|svg|ttf|woff)$/,
        use: ['file-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          // { loader: 'css-loader', options: { modules: true, localIdentName: '[name]_[local]_[hash:base64:5]' } },
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    //two plugins for HMR
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '新崔斯特姆',
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
};