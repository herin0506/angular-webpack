const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js');
// const paths = require('./paths');

const developmentConfig = {
    mode: 'development',

    devtool: 'eval-source-map',

    output: {
        // publicPath: './',
        // path: paths.appBuildPath,
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'

    },

    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true,
        clientLogLevel: 'none',
        stats: 'minimal',
        open: 'Chrome'
    }
};

module.exports = () => {
    return merge(commonConfig, developmentConfig);
}