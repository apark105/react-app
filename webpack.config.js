const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }        
        },
      ]
    },
    // resolve: {
    //   extensions: ['*', '.js', '.jsx']
    // },
    plugins: [htmlPlugin]
  };