var DEBUG = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;
var webpack = require('webpack');
var path = require('path');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var devtool = DEBUG ? '#inline-source-map' : '#eval';

var LOG_ENV = false;
var plugins = [];

if (DEBUG) {
    LOG_ENV = true;
} else {
    plugins.push( new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}) );
}

plugins.push( new webpack.ProvidePlugin({ jQuery: "jquery", $: "jquery", jquery: "jquery" }) );
plugins.push( new ExtractTextPlugin('stylesheets/[name].bundle.css') );
plugins.push( new webpack.DefinePlugin( { DEBUG_LOG_ENV: LOG_ENV  }) );

module.exports = {
    entry: {
        'application': './src/webpackEnvironment.js',
    },
    output: {
        path: '../public/assets',
        filename: 'javascript/[name].bundle.js'
    },
    devtool: devtool,
    plugins: plugins,
    resolve: {
      root: [ path.join(__dirname, "node_modules") ],
      extensions: ['', '.js', '.css']
    },
    module: {
        loaders: [
            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

            // loads css
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=image/svg+xml' },
            { test: /\.woff(\d+)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?mimetype=application/font-woff' }
        ]
    }
};
