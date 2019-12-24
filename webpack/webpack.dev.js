const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const devConfig = {

    mode: "development", 
    entry: [
        './src/index.js'
    ],
    output: {
        filename: './bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.jpg$/i,
                loaders: [
                    'file-loader',
                ],
            },
            {
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    },
    devtool: "source-map",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "Test template",
            template: "./src/index.html"
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        port: 4200,
        hot: true,
    }
};

module.exports = devConfig;