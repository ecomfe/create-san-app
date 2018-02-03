/**
 * @file dev
 * @author chenbo09
 */

'use strict';
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000,
        proxy: {
            '/api': {
                // 转发到mockup的服务上了 具体见mockup/server
                target: 'http://localhost:9001',
                pathRewrite: {'^/api': ''}
            }
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('./dev.env')
        })
    ]
});
