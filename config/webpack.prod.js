process.env.NODE_ENV = 'production';
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');
const util = require('./webpack.util');

module.exports = webpackMerge(common, {
    devtool: 'source-map',
    output: {
        path: util.root('dist'),
        /**
         * 生成的路径可以修改
         */
        publicPath: './',
        filename: 'js/[name].[hash].js'
    },
    htmlLoader: {
        minimize: false
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                toplevel: true,
                keep_fnames: true
            },
            compress: {
                dead_code: true,
                sequences: true,
                unsafe: true,
                unused: true,
                hoist_funs: true
            }
        })
    ]
});
