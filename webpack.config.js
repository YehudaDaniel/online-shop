const APIPlugin = require("webpack/lib/APIPlugin");

module.exports = {
    target: 'node',
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: `${__dirname}/public/dist`,
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/, //compile only css files with this rule
            use: [
                'style-loader',
                'css-loader'
            ],
            exclude: /node_modules/
        }],
    },
}