var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: false,
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
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
}