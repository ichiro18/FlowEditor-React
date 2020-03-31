'use strict';

// ! # Dependencies
// * Global
const merge = require('webpack-merge');
// * Configs
const baseConfig = require('./webpack.base.config');


// ! # Config
const devConfig = {
    mode: 'production',
    devtool: 'inline-source-map',
    output: {
    
    },
    optimization: {
        minimize: true
    }
};

const devPlugins = {
    plugins: []
};

module.exports = merge(
    baseConfig,
    devConfig,
    devPlugins
);
