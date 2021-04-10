# 开发说明-v1
## 项目构建
项目骨架使用vue-cli4.0搭建
## 目录结构
+ node_modules：项目依赖文件夹，保存项目所需依赖
+ public：静态资源文件夹
    - favicon.ico：网站图标
    - index.html：页面入口文件
+ src:项目源码
    - assets：项目静态资源（css、图片）
        * base.css：项目公共css样式定义，要看一下，避免再自己写的组件中定义重复样式
    - components：存放公共组件
    - request：http请求部分封装（暂时没写，需要后端提供接口）
    - router：路由配置
    - store：vuex配置
    - views：存放视图组件（开发的页面组件放在这里）
        * Home.vue：主页
    - App.vue：根组件
    - main.js：js入口文件
+ editorconfig：规定代码风格，保存代码时使用alt+shift+f规范化保存
+ eslintrc.js：代码风格检测工具eslint配置
+ gitignore：git不上传类型
+ babel.config.js：ES6语法转换相关配置
+ package.json：项目描述文件和依赖
+ package-lock.json：项目依赖版本锁定文件
+ vue.config.js：vue项目添加的配置，包括webpack配置，css配置和代理配置等
## 关于移动端开发
+ 技术选型：媒体查询+rem适配
+ 媒体查询部分已经再base.css中写好，开发过程中所有尺寸单位使用rem
+ 调试时可以再浏览器开发者工具中切换调试工具查看手机上页面显示效果
+ 如果因为rem尺寸不好计算可以使用less写css部分
## git使用说明
+ 我已经把各位都加入我的github项目的开发者，只要在自己的电脑上建立git仓库然后关联到我的仓库就可以直接push了（要登录自己的github账户）
+ 使用步骤
    > 1、创建本地git仓库 `git init`（在自己的项目文件夹下）  
    > 2、关联远程仓库`git remote add origin https://github.com/dsy666/school.git`  
    > 3、再我的github上建立分支，每个人建一个分支，不能重名  
    > 4、为了提交逻辑清晰，建议在自己本机git仓库也建立一个master分支和dev分支，master分支放github上master分支clone的代码，dev分支放自己开发代码，提交时直接切换到dev分支提交  
    > 5、将我的master分支上的项目clone到自己的项目文件夹中`git clone https://github.com/dsy666/school.git`  
    > 6、提交github命令`git push -u origin '自己再github上创建分支的名字'`