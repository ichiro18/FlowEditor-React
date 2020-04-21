const MiniCssExtractPlugin = require('mini-css-extract-plugin');

exports.config = {
  module: {
    rules: [
      // CSS
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ],
      },
      // SASS
      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          "@teamsupercell/typings-for-css-modules-loader",
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};
