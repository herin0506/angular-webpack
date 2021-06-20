const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');

module.exports = {
    entry: {
        'polyfills': './polyfills.ts',
        'vendor': './vendor.ts',
        'app': './src/main.ts',
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: { configFile: './tsconfig.json' }
                    }, 'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true
                        }
                    }
                ]
            },
            {
                test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
                parser: { system: true }
            },
            {
                test: /\.(ico)$/,
                use: "file-loader?name=[name].[ext]"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",   // Input FileName
            filename: "./index.html"    // Output FileName
        }),
        new webpack.ContextReplacementPlugin(
            /\@angular(\\|\/)core(\\|\/)fesm5/
        )
    ],

    // optimization: {
    //     splitChunks: {
    //         chunks: "all"
    //     }
    // }
};
