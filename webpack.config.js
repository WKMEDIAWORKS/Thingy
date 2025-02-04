const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
    entry: "./src/index.js",
    mode: "development",
    output: {
        path: __dirname + "/dist",
        filename: "main.js",
    },
module: {
    rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],  
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            type: 'asset/resource', 
            generator: {
                filename: 'assets/icons/[name][hash][ext][query]' 
            }
        },
    ],
},
plugins: [new HtmlWebpackPlugin({
    template: "./src/template.html",
}),
],
};