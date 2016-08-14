const path = require('path');
const webpackConfig = require('./webpack.config');

// Add JSON loader
webpackConfig.module.loaders.push({
    test: /\.json$/,
    loaders: ['json-loader',],
});

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [
            './src/**/*.test.jsx',
        ],
        preprocessors: {
            'src/**/*.js': ['webpack',],
            'src/**/*.jsx': ['webpack',],
        },
        webpack: {
            module: {
                loaders: webpackConfig.module.loaders,
            },
            externals: {
                'react/addons': true,
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': true,
            }
        },
        webpackMiddleware: {
            noInfo: true,
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['PhantomJS'],
        singleRun: false,
    })
};
