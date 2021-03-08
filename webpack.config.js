// commonJS方式配置webpack
const path = require('path')
module.exports = {
    mode:'development',
    // mode:'production',
    entry:'./main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'js_tool_utils.js',
        // filename:'js_tool_utils.min.js'
        // 库文件，需要配置库引用模式及库名
        libraryTarget:'umd', // 定义统一的模式，支持esm,cmd
        library:'js-tools' // 包名
    }
}