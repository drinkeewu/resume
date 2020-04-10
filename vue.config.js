
module.exports = {
  publicPath: process.env.NODE_ENV === 'development'
  ? ''
  : '/resume/',
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
  },
  productionSourceMap: false
};
