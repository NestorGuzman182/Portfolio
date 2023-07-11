const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/main.js'
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
                use: [
                    {   loader: 'style-loader'  },
                    {   loader: 'css-loader'    } 
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'images/',
                            publicPath: '../images/'
                        } 
                    }
                ]
            },
            {
                test: /\.json$/,
                loader: 'file-loader',
                type: 'javascript/auto',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'lang/',
                    publicPath: '../lang/'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
    ],
    devServer: {
        static: { 
            directory: path.resolve(__dirname, 'src/'),
            publicPath: '/',
         } ,
         devMiddleware: {
            publicPath: '/build/'
         },
        port: 5100,
        open: true
    }
}