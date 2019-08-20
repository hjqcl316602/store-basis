/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-18 22:16:27
 * @LastEditTime: 2019-08-18 22:43:40
 * @LastEditors: Please set LastEditors
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
  //devtool: 'source-map',
  entry: {
    main: './package/ui/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../package/ui'),
    publicPath: '/dist/',
    filename: 'index.min.js',
    library: 'index',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    // @todo
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new UglifyJsPlugin({
      parallel: false, // true,
      sourceMap: false // true
    })
    // new CompressionPlugin({
    //   asset: '[path].gz[query]',
    //   algorithm: 'gzip',
    //   test: /\.(js|css)$/,
    //   threshold: 10240,
    //   minRatio: 0.8
    // })
  ]
});
