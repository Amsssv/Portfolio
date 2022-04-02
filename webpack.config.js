const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool:"source-map",
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./src/css/[name].css",
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'

        })
    ],
    module: {
        rules: [
            {
                test: /\.(jsx?|js?)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    "presets": ["@babel/preset-env", "@babel/preset-react"]
                },
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"], // needed to remove style-loader, as it causes nextjs to crash on server side render see: https://github.com/vercel/next.js/discussions/14060
            },
        ]
    }
};