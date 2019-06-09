const path = require('path')
const srcPath = path.resolve(__dirname, '../src')
module.exports = {
  mode: 'development',
  entry: path.resolve(srcPath, './index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'dist.bundle.js',
    publicPath: '/assets/'
  },
  devtool: 'eval-source-map',
  module: {
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        // 确保babel也可以应用到nodemoudles里面的vue单文件
        exclude: file => (
          /node_modules/.test(file) &&
          !/\.vue\.js/.test(file)
        ),
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },

}