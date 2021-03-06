module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
     
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      entry: ['babel-polyfill', './test.js'],
      test: /\.jsx?$/, loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1'],
        plugins: ["transform-decorators-legacy"]
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    port:'8080',
    contentBase: './'
  }
};
