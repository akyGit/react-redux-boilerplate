const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const config = {
    entry: path.resolve(__dirname, 'src', 'App.jsx'),
    output: {
        filename: 'main.js',
        path: path.join(__dirname, (isProduction ? 'build' : 'public'))
    },

    devServer: {
        contentBase: path.join(__dirname, 'public')
    },

    devtool: isProduction ? '' : 'source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },

            {
                test: /\.less$/,
                use: [
                    isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [ autoprefixer ]
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'templates', 'index.html')
        })
    ]
};

if (isProduction) {
    config.plugins.push(new MiniCssExtractPlugin({
        filename: '[name].css'
    }));

    config.plugins.push(new CleanWebpackPlugin());
}

module.exports = config;
