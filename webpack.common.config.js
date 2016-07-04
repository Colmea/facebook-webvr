var webpack = require('webpack');
var path = require('path');

module.exports = {

    entry: [
        './src/main.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias:{
            app: path.resolve( __dirname, './src/app'),
            library: path.resolve( __dirname, './library'),
            components: path.resolve( __dirname, './src/app/components'),
            actions: path.resolve( __dirname, './src/app/actions'),
            stores: path.resolve( __dirname, './src/app/stores')
        },
        extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
    },
    eslint: {
        configFile: './.eslintrc'
    },
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
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    plugins: ["transform-class-properties"],
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: []
};