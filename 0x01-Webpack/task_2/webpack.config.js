const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader: 'image-webpack-loader',
                type: 'asset/resource',
            },
        ]
    },
    entry: {
        main: path.resolve(__dirname, './js/dashboard_main.js')
    },
    output: {
        filename: `bundle.js`,
        path: path.resolve(__dirname, 'public')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Task 2",
        }),
    ],
    mode: 'production',
}
