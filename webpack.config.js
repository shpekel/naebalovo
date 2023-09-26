const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js', // Ваш файл с исходным кодом
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'), // Папка, куда будет собран бандл
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};