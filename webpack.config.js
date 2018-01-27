const path = require('path');
const WebpackPlugins = require('./webpack/webpack.plugins.config.js');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'statics/js/main[hash].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'env', 'stage-2']
                    }
                }
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                use: ['json-loader']
            },
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(mp3|png|svg|gif|jpe?g)$/,
                'exclude': /node_modules/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    plugins: [
        WebpackPlugins.ProgressBarWebpackPluginConfig,
        WebpackPlugins.CleanWebpackPluginConfig,
        WebpackPlugins.HtmlWebpackPluginConfig,
        WebpackPlugins.ExtractTextWebpackPluginConfig,
        WebpackPlugins.UglifyJSWebpackPluginConfig
    ]
};