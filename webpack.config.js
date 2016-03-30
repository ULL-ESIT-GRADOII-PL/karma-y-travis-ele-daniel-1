var webpack = require('webpack');

module.exports = {
  resolve: {
      extensions: ['','.webpack.js', '.web.js', '.js']
  },

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  // Your app configuration
  entry: {
      main: ['./assets/js/conversor.js'],
      vendor: ['xregexp']
  },
  output: {
      path: require("path").resolve('vendor'),
      filename: '[name].js' // Template based on keys in entry above
  }
};
