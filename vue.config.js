module.exports = {
  chainWebpack: config => {
    config.module
      .rule('!#')
      .test(/coffee/)
      .use('shebang-loader')
      .loader('shebang-loader')
      .end()
  }
}