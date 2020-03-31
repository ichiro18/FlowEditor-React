exports.config = {
  module: {
    rules: [
      // ES6
      {
        test: /\.m?js$/,
        exclude: file => (
          /node_modules/.test(file)
        ),
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  },
};
