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
            test: /\.scss$/, //compile only scss files with this rule
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ],
            exclude: /node_modules/
        }],
    },
}