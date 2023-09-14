const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports =(env, argv) => {
    const isProduction = argv.mode === 'production';
    return {
            entry: {
                index: ['./src/js/index.js', './src/js/main.js','./src/js/menu.js', './src/js/info-trad.js']
            },
            output: {
                path: path.resolve(__dirname, 'dist'),
                filename: '[name].bundle.js'
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
                        use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
                    },
                    {
                        test: /\.(png|jpg|jpeg|gif|svg)?$/,
                        type: 'asset/resource',
                        generator:   {
                            filename: 'images/[name].[ext]'
                            }
                    },
                    {
                        test: /\.json$/,
                        type: 'asset/resource',
                        generator: {
                            name: 'lang/[name].[ext]',
        /*                     outputPath: 'lang/',
                            publicPath: '../lang/' */
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
                isProduction && new MiniCssExtractPlugin({
                    filename: '[name].bundle.css'
                })
            
            ].filter(Boolean),
            devServer: {
                
      /*           static: { 
                    directory: path.resolve(__dirname, 'src/'),
                    publicPath: '/',
                } , */
      /*           devMiddleware: {
                    publicPath: '/dist/'
                }, */
                port: 5100,
                open: true
            }
        }
    }