/**
 * @file dev
 * @author chenbo09
 */

'use strict';
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = require('./build.conf');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: config.dev.devtool,
    devServer: {
        contentBase: './dist',
        compress: true,
        port: config.dev.port,
        proxy: {
            '/api': {
                // 转发到mockup的服务上了 具体见mockup/server
                target: 'http://localhost:9001',
                pathRewrite: {'^/api': ''}
            }
        },
        watchOptions: {
            poll: config.dev.poll
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('./dev.env')
        }),
        new HtmlWebpackPlugin({
            title: 'SAN APP',
            filename: 'index.html',
            template: 'index.html',
            inject: true,
            favicon: 'favicon.ico'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, '../static'),
                to: config.dev.assetsSubDirectory,
                ignore: ['.*']
            }
        ])
    ]
});
