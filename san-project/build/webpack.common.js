/**
 * @file common
 * @author chenbo09
 */

'use strict';
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = require('./build.conf');

const extractCSS = new ExtractTextPlugin({
    filename: 'static/css/[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

const extractLESS = new ExtractTextPlugin({
    filename: 'static/css/[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

function alias(name) {
    return path.dirname(require.resolve(name));
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        app: './src/main.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].bundle.js',
        publicPath: process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6'],
        mainFiles: ['index', 'main']
    },
    module: {
        rules: [
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'static/img/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: extractCSS.extract({
                    use: ['css-loader'],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.less$/,
                use: extractLESS.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader',
                        options: {
                            relativeUrls: true,
                            paths: []
                        }
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.es6$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0']
                    }
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|dist)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0']
                    }
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'url-loader'
                ]
            }
        ]
    },
    plugins: [
        // extract css into its own file
        extractCSS,
        extractLESS
    ]
};
