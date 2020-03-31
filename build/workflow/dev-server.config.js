const constants = require('../common/const');

exports.config = {
  contentBase: constants.PATH.dist,
  compress: true,
  hot: true,
  open: false,
  port: 3000,
  quiet: true,
};
