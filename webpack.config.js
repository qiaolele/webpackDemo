var path = require("path");
// 引入插件
var htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // 单个文件引入
    // entry: './src/script/index.js',
    entry: ['./src/script/home.js','./src/script/index.js'],//多页面应用的时候
    output: {
        path: path.resolve(__dirname, './dist'),//指定输出的路径
        filename: 'js/[name]-bundle.js',//指定输出js的文件放到哪里并且名称为啥
        // filename: 'bundle.js'
        publicPath: "http://cdn.com/",//占位符——上线时候需求
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',//指定生成的html文件名称
            template: 'index.html',//指定html模板
            inject: 'head',//指定标签显示在哪个标签里面
            // 让模板获得设置的变量
            title: 'webpack is good',//指定title的值——这种方式去引用<%= htmlWebpackPlugin.options.title %>
            date: new Date(),
            minify: {
                removeComments: true,//删除注释
                collapseWhitespace: true,//删除空格

            },//对生成的文件进行压缩——用于上线之前
        })
    ]
}