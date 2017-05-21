const path    = require("path");
const webpack = require("webpack");

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
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    plugins: []
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