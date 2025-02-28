const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    entry: {
        index: ['./src/js/index.js', './src/js/main.js','./src/js/menu.js', './src/js/info-trad.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css?$/,
                use: [  MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)?$/,
                type: 'asset',
                generator: {
                    filename: 'images/[name][ext]'
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 75
                            },
                            optipng: {
                                enabled: true
                            },
                            pngquant: {
                                quality: [0.65, 0.90], speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]   
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
                generator: {
                    name: 'lang/[name].[ext]',
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].bundle.css'
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: "public/lang", to: "lang" },
              ],
        })
      
    ],
}