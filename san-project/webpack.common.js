/**
 * @file file
 * @author chenbo09
 * Created on 2018/1/28.
 */

const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function alias(name) {
    return path.dirname(require.resolve(name));
}

module.exports = {
    entry: {
        app: './src/main.js'

    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'SAN APP',
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es6'],
        mainFiles: ['index', 'main'],
        alias: {
            'eoo': alias('@ecomfe/eoo'),
            'mini-event': alias('@ecomfe/mini-event'),
            'er': alias('@ecomfe/er'),
            'inf-ria': alias('@ecomfe/inf-ria'),
            'inf-i18n': alias('@ecomfe/inf-i18n')
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name(file) {
                                return 'assets/images/[hash].[ext]';
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {
                        loader: 'less-loader',
                        options: {
                            relativeUrls: true,
                            paths: []
                        }
                    }
                ]
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
                    'file-loader'
                ]
            }
        ]
    }
};
