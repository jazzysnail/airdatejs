const path = {
  Airdate: './src/Airdate.js',
  dist: './dist'
};

module.exports = {
  entry: path.Airdate,
  output: {
    path: path.dist,
    filename: "Airdate.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  }
};
