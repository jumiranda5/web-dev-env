const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      index: './src/page-home/main.js',
      another: './src/page-another/main.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['index'],
            template: 'src/page-home/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'another-page.html',
            chunks: ['another'],
            template: 'src/page-another/another-page.html',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
      },
};