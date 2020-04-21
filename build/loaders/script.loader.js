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
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ],
  },
};
