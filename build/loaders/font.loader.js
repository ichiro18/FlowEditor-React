exports.config = {
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: 'fonts/[name].[ext]',
              publicPath: '../',
            },
          },
        ],
      },
    ],
  },
};
