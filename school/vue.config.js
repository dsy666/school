module.exports = {
  // 配置常用路径简写
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    },
    devServer: {
      // 设置在devServer启动且第一次构建完成时自动使用系统默认浏览器去打开网页
      open: false,
      // 服务器启动端口
      port: 8081,
      // 是否启动热更替功能
      hot: true,
      https: false,
      hotOnly: true
    }
  }
}
