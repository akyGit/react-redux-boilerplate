const path              = require("path");
const webpack           = require("webpack");
const autoprefixer      = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV;

const config = {
    entry: {
        app: [path.resolve(__dirname, 'src', 'App.jsx')]
    },
    output: {
        path: path.resolve(__dirname, 'public', 'static_assets'),
        publicPath: "/static_assets/",
        filename: "bundle.js"
    },
    module: {
        rules: [
          {
              test: /\.less$/,
              loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  { loader: 'postcss-loader', options: { plugins: [ autoprefixer ]}},
                  'less-loader'
                ]
              })
          },
          {
              test: /\.css$/,
              loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  { loader: 'css-loader', options: { importLoaders: 1 } },
                  { loader: 'postcss-loader', options: { plugins: [ autoprefixer ]}}
                ]
              })
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
    },
    plugins: [
      new ExtractTextPlugin({ filename: 'style.css', allChunks: true })
    ]
};

if (env === 'production') {
    config.plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production')
        }
    }));

    config.plugins.push(new webpack.optimize.UglifyJsPlugin({}));
}

module.exports = config;
