var webpack = require("webpack");
var path = require("path");
// 引入插件
var htmlWebpackPlugin = require('html-webpack-plugin');
//可以根据不同的页面指定不同的模板，也可以指定相同的模板

module.exports = {
    // 单个文件引入
    entry: {
        homePage: './src/script/home.js',
        indexPage: './src/script/index.js',
        main: './src/script/main.js',
        // main: './src/script/jquery-2.1.4.min.js',
    },//多页面应用的时候
    output: {
        path: path.resolve(__dirname, './dist'),//指定输出的路径
        filename: 'js/[name]-bundle.js',//指定输出js的文件放到哪里并且名称为啥
        // filename: 'bundle.js'
        // publicPath: "http://cdn.com/",//占位符——上线时候需求
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
//exclude:__dirname+'/node_modules/',
//include:__dirname+'/src/',
                exclude:path.resolve(__dirname,'node_modules'),
                include:path.resolve(__dirname,'src'),
                query: {
                    "presets":["latest"]
                }
            },
            {
                test: /\.css|scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1 // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                // loader: 'file-loader'
                loaders: [
                    'url-loader?limit=100&name=assets/[name]-[hash:5].[ext]',
                    'image-webpack-loader',
                ]
                // query: {
                //     name: 'assets/[name]-[hash:5].[ext]'
                // }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loaders: [
                    'url-loader?limit=100&name=assets/[name]-[hash:5].[ext]',
                    'image-webpack-loader',
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'home.html',//指定生成的html文件名称
            template: 'index.html',//指定html模板
            // inject: 'head',//指定标签显示在哪个标签里面
            // inject: 'body',//指定标签
            // 自动引入
            inject: false,//不会自动引入
            // 让模板获得设置的变量
            title: 'this is home.html',//指定title的值——这种方式去引用<%= htmlWebpackPlugin.options.title %>
            chunks: ['main','homePage'],

            /*date: new Date(),
            minify: {
                removeComments: true,//删除注释
                collapseWhitespace: true,//删除空格

            },//对生成的文件进行压缩——用于上线之前*/
        }),
        new htmlWebpackPlugin({
            filename: 'index.html',//指定生成的html文件名称
            template: 'index.html',//指定html模板
            // inject: 'body',//指定标签自动引入
            inject: false,//不会自动引入
            // 让模板获得设置的变量
            title: 'this is index.html',//指定title的值——这种方式去引用<%= htmlWebpackPlugin.options.title %>
            chunks: ['main','indexPage'],
            // excludeChunks: ['a','b'],//排除哪些js不被加载进来，其他全部被加载进来
            /*date: new Date(),
            minify: {
                removeComments: true,//删除注释
                collapseWhitespace: true,//删除空格

            },//对生成的文件进行压缩——用于上线之前*/
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "window.jQuery":"jquery"
        }),
    ]
}