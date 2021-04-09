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
    // 项目部署在服务器的路径
    publicPath:'./',
    // 放置npm run build生成的文件输出目录
    outputDir:'dist',
    // 放置npm run build生成的静态文件目录(相对于outDir的目录)
    assetsDir:'static',
    // 放置npm run build生成的index.html输出文件(相对于outDir的目录)
    indexPath:'index.html',
    lintOnSave:true,
    // 是否在保存项目后运行eslint校验代码
    runtimeCompiler:false,
    // css相关选项
    css:{
      // 将组建内的css提取到一个单独的css文件
      extract:true,
      // 是否开启css source map
      sourceMap:false
    },
    // webpack-dev-server配置
    devServer:{
      // 设置在devServer启动且第一次构建完成时自动使用系统默认浏览器去打开网页
      open:false,
      // 服务器启动端口
      port:8081,
      // 是否启动热更替功能
      hot:true,
      https:false,
      hotOnly:true
    }
  }
}
