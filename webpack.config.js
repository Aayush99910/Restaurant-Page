const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        publicPath: "",
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                  loader: "file-loader",
                  options: {
                    limit: 5000
                  }
                }
            }
        ],
    },
}