const path = require('path');
const webpack = require('webpack');

const phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|mp4|mp3)$/,
        use: 'file-loader',
        exclude: /node_modules/
      },
      {
        test: /(phaser-split|p2|pixi).js$/,
        use: 'script-loader'
      },
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
         test: /\.css$/,
         use: [
           'css-loader'
         ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src','image:href','rect:data-imagen','image:data-ruta-imagen']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
        'phaser': phaser,
        'pixi.js': pixi,
        'p2': p2,
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }

}
