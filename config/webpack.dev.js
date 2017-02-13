process.env.NODE_ENV = 'develop';
const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');
const util = require('./webpack.util');

module.exports = webpackMerge(common, {
    devtool: 'source-map',

    output: {
        path: util.root('dist'),
        publicPath: '/',
        filename: 'js/[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        //host: '192.168.130.27'
    }
});
