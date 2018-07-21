module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "bundle.js"
    },
    watch: true,
    mode: "development",
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"},
                {loader: "sass-loader"}
            ]
        }]
    }
}