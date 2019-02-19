var path = require('path');

const entryPath = path.join(__dirname, '/client')
const outputPath = path.join(__dirname, '/public');

module.exports = {
  mode: 'development',
  entry: entryPath + '/app.jsx',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
};