const path = require('path')
module.exports = {
  mode: 'production',
  entry: {
    index: './lib/index.tsx' // 定义项目入口 文件名：地址
  },
  output:{
    path: path.resolve(__dirname,'dist/lib'),
    library: 'forestUI', // 库的名称
    libraryTarget: 'umd', //封装成什么模块定义  commonJS, umd, amd

  },
  module: {
    rules: [
       {
         test: /\.tsx?$/,
         loader: 'awesome-typescript-loader'
       }
    ]
  }
}