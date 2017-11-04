var path = require('path');

const webpack = require("webpack");

module.exports = {
    entry: [
        'babel-polyfill',
        './src/client.js'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env', 'stage-0']
                }
            }
        ]
    }
}