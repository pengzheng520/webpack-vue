const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const extractCss = process.env.NODE_ENV === 'develop' ?
    new ExtractTextWebpackPlugin('css/[name].css') :
    new ExtractTextWebpackPlugin('css/[name].[hash].css');
const util = require('./webpack.util');
const files = ['index'];
let entry = {};
let views = [];

/**
 * 入口文件添加块
 * @type {string[]}
 */
entry['vendor'] = ['vue', 'vue-router', 'vuex'];
for (let i = 0; i < files.length; i++) {
    let arr = [files[i]];
    arr.push('vendor');
    views.push(new HtmlWebpackPlugin({
        template: './' + files[i] + '.html',
        filename: files[i] + '.html',
        /**
         * 给生成HTML上添加第三方库
         */
        chunks: arr
    }));
    entry[files[i]] = './src/' + files[i] + '.js';
}
module.exports = {
    entry: entry,
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                include: util.root('sass'),
                loader: extractCss.extract(['css?sourceMap', 'sass'])
            }, {
                test: /\.vue$/,
                loader: 'vue'
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '../src/assets/[name].[ext]'
                }
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '../src/libs/fonts/[name].[ext]'
                }
            }
        ]
    },
    vue: {
        loaders: {
            css: extractCss.extract('css?sourceMap'),
            sass: extractCss.extract(['css?sourceMap', 'postcss', 'sass'])
        }
    },
    postcss: [autoprefixer({browsers: ['>1%']})],
    babel: {
        presets: [
            'es2015', 'stage-0'
        ],
        plugins: ['transform-runtime']
    },
    plugins: [
        extractCss,
        process.env.NODE_ENV === 'develop' ?
            new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.js'}) :
            new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.[hash].js'})
    ].concat(views)
};
