const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';


module.exports = {
    entry: {
        main: './src/pages/main/main.js',
        '01-palindrome': './src/pages/01-palindrome/script.js',
        '02-fizzbuzz': './src/pages/02-fizzbuzz/script.js',
        '03-reverse-words': './src/pages/03-reverse-words/script.js',
        '04-capitalize': './src/pages/04-capitalize/script.js',
        '05-find-vowels': './src/pages/05-find-vowels/script.js',
        '06-uniq': './src/pages/06-uniq/script.js',
        '07-anagram': './src/pages/07-anagram/script.js',
        '08-fibonacci': './src/pages/08-fibonacci/script.js',
        '09-is-prime': './src/pages/09-is-prime/script.js',
        '10-factorial': './src/pages/10-factorial/script.js',
        '11-intersection': './src/pages/11-intersection/script.js',
        '12-count-zeros': './src/pages/12-count-zeros/script.js',
        '13-sum-of-two': './src/pages/13-sum-of-two/script.js',
        '14-primes': './src/pages/14-primes/script.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './pages/[name]/script.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    (isDev ? 'style-loader'  : {
                            loader: MiniCssExtractPlugin.loader,
                            options: {
                            publicPath: '../'
                            }
                        }),
                    'css-loader',
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|ico|svg|webp)$/,
                use: {
                loader: 'file-loader?name=./images/[name].[ext]'
                },
            },
            {
                test: /\.(eot|ttf|otf|woff|woff2)$/,
                use: {
                    loader: 'file-loader?name=./fonts/[name].[ext]'
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './pages/[name]/[name].[contenthash].css',
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/01-palindrome/index.html',
            filename: './pages/01-palindrome/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/02-fizzbuzz/index.html',
            filename: './pages/02-fizzbuzz/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/03-reverse-words/index.html',
            filename: './pages/03-reverse-words/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/04-capitalize/index.html',
            filename: './pages/04-capitalize/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/05-find-vowels/index.html',
            filename: './pages/05-find-vowels/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/06-uniq/index.html',
            filename: './pages/06-uniq/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/07-anagram/index.html',
            filename: './pages/07-anagram/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/08-fibonacci/index.html',
            filename: './pages/08-fibonacci/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/09-is-prime/index.html',
            filename: './pages/09-is-prime/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/10-factorial/index.html',
            filename: './pages/10-factorial/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/11-intersection/index.html',
            filename: './pages/11-intersection/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/12-count-zeros/index.html',
            filename: './pages/12-count-zeros/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/13-sum-of-two/index.html',
            filename: './pages/13-sum-of-two/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/pages/14-primes/index.html',
            filename: './pages/14-primes/index.html'
        }),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new WebpackMd5Hash()
    ]
};