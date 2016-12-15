const path = {
  Airdate: './src/Airdate.js',
  test: './test'
};

module.exports = {
  watch: true,
  entry: path.Airdate,
  output: {
    path: path.test,
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
