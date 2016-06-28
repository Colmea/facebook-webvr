var webpack = require('webpack');
var path = require('path');
var commonConfig = require('./webpack.common.config');

module.exports = Object.assign(commonConfig, {
    plugins: commonConfig.plugins.concat([
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
});

