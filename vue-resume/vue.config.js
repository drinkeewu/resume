
module.exports = {
  publicPath: process.env.NODE_ENV === 'development'
    ? ''
    : '/resume/page',
  outputDir: '../page',
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
  },
};
