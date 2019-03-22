const path = require('path')

module.export = {
  mode: 'development',
  entry: './scr/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist')
  }
}