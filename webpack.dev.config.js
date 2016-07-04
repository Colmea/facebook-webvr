var webpack = require('webpack');
var path = require('path');
var commonConfig = require('./webpack.common.config');

module.exports = Object.assign(commonConfig, {
    debug: false,
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        './src/main.js'
    ],
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
            },
        ],
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'react-hot',
                exclude: /node_modules/
            },
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ["transform-class-properties"],
                    presets: ['es2015', 'react', 'react-hmre']
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});