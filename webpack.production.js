const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// 为每个页面定义一个 ExtractTextPlugin 
// const homeExtractCss = new ExtractTextPlugin('home/[name].[chunkhash:8].css');
// const searchExtractCss = new ExtractTextPlugin('search/[name].[chunkhash:8].css');
// const detailExtractCss = new ExtractTextPlugin('detail/[name].[chunkhash:8].css');



module.exports = {
  // devtool: 'source-map',
  devtool: 'false',
  mode: 'production',
  entry: {
    'babel-polyfill': 'babel-polyfill',
    index: './src/index.js',
    search: './src/pages/search/index.js',
    detail: './src/pages/detail/index.js',
  },
  // entry: {
  //   index: './src/index.js',
  //   search: './src/pages/search/index.js',
  //   detail: './src/pages/detail/index.js',
  // },
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
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
          fallback: ['style-loader'],
        }),
      },
      // {
      //   test: /\.\/src\/(?!pages)((common|statics)\/)*([a-z]+\/)*.*\.(css|scss)$/,//匹配到了 但是不生效
      //   use: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //   })
      // },
      // {
      //   test: /\.\/src\/pages\/detail\/([a-z]+\/)*.*\.(css|scss)$/,//匹配到了 但是不生效
      //   use: detailExtractCss.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //   })
      // },
      // {
      //   test: /\.\/src\/pages\/search\/([a-z]+\/)*.*\.(css|scss)$/,
      //   use: searchExtractCss.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //   })
      // },
      // {
      //   test: /\.\/src\/pages\/home\/([a-z]+\/)*.*\.(css|scss)$/,
      //   use: homeExtractCss.extract({
      //     fallback: 'style-loader',
      //     use: ['css-loader', 'sass-loader'],
      //   })
      // },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: '[name]_[chunkhash:8].css',
    }),
    // homeExtractCss, searchExtractCss, detailExtractCss,//new
    new CleanWebpackPlugin(['server/public/dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      favicon: './src/statics/tristram-icon.jpg',
    }),
    new HtmlWebpackPlugin({
      filename: 'search.html',
      template: './src/pages/search/index.html',
      favicon: './src/statics/tristram-icon.jpg',
    }),
    new HtmlWebpackPlugin({
      filename: 'detail.html',
      template: './src/pages/detail/index.html',
      favicon: './src/statics/tristram-icon.jpg',
    }),
  ],
  optimization: {
    splitChunks: {
      // chunks: 'all',
      cacheGroups: {
        // 提取 node_modules 中代码
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        // commons: {
        //   // async 设置提取异步代码中的公用代码
        //   chunks: 'async',
        //   name: 'commons-async',
        //   minSize: 0,
        //   minChunks: 2
        // }
      },
    },
    runtimeChunk: {
      name: 'mainfest'
    }
  },
};