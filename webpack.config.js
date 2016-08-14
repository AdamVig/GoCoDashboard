const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
    entry: './src/app.jsx',
    output: {
        path: './build',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    cacheDirectory: true,
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        query: {
                            localIdentName: '[local]---[name]-[hash:base64:5]',
                            modules: true,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new Visualizer(),
    ],
    resolve: {
        extensions: ['', '.js', '.jsx',],
    }
};
