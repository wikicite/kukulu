const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  mode: "development",
  devtool: "cheap-source-map",
  
  entry: "./src/spec.js",
  output: {
    filename: "bundle.js"
  },

  plugins: [
    new MiniCssExtractPlugin({})
  ],

  // use jquery-slim instead of jquery
  resolve: {
    extensions: [".js"],
    alias: {
      jquery: "jquery/dist/jquery.slim.js"
    }
  },

  module: {
    rules: [
      {
        test: /.css$/,
        // TODO: where to write it to
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          "css-loader"
        ]
      }
    ]
  }
}
