## 前言

一、为什么你需要一个博客？

优秀的程序员都在写博客，写博客有很多好处：

帮助自己梳理、总结、理解知识点（个人提升）
帮助别人理解知识点（好人一生平安）
简历更好看，更多面试机会（升职加薪）

## 开始搭建

### 创建项目文件夹

可以手动创建,也可以使用 mkdir 命令创建:

mkdir vuepressDemo

### 全局安装 VuePress

npm install -g vuepress || yarn add global vuepress

### 进入 vuepressDemo 文件夹,初始化项目

使用 npm init 或 npm init -y

npm init -y

### 创建文件夹

![](/项目目录图片.png)

#### config.js 代码 文件中配置网站标题、描述、主题等信息

```javascript
module.exports = {
  themeConfig: {
    searchMaxSuggestions: 10,
    nav: [
      {
        // 配置导航栏
        text: 'demo1',
        link: '/demo1/demo1.md',
      },
      {
        text: 'demo2',
        link: '/demo2/demo2.md',
      },
    ],
    sidebar: {
      // 配置侧边栏
      '/demo1/': [
        {
          title: '入门兴趣', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [['demo1.md', 'vuepress建立个人博客1']],
        },
      ],
      '/demo2/': [
        {
          title: '入门兴趣', // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [['demo2.md', 'vuepress建立个人博客2']],
        },
      ],
    },
  },
}
```

#### README.md 代码

```
---
home: true
actionText: 快速上手 →
actionLink: /demo1/demo1.md
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

#### 在 package.json 文件里添加两个启动命令

```JavaScript
"scripts": {
  "dev": "vuepress dev docs",
  "build": "vuepress build docs"
}
```

#### 一切就绪跑起来看看吧

npm run dev




## 部署上线

一般来说，有两种方案可供选择：

1.自己买一个服务器，阿里云、腾讯云等，这种方式的好处是速度有保证、可以被搜索引擎收录，坏处是要花钱啊 moneybag 土豪同学可以考虑。

2.使用 Github Pages 。什么是 Github Pages 呢？简单说就是 Github 提供的、用于搭建个人网站的静态站点托管服务。很多人用它搭建个人博客。这种方式的好处是免费、方便，坏处是速度可能会有些慢、不能被国内的搜索引擎收录。
最终我选择了方案 2，下面将给大家讲解如何使用 Github Pages 服务

#### 登录 <a href="https://github.com/" target='_blank'>GitHub</a>

打开 github 网站，登陆自己的 github 账号（没有账号的快去注册并面壁思过作为一个优秀的程序员为啥连一个 github 账号都没有）

接着我们新建两个仓库，

### 新建仓库一： USERNAME.github.io （不用克隆到本地）

::: warning 注意
注意！
USERNAME 必须是你 Github 的账号名称，不要瞎起，要保证和Github账号名一模一样！
:::

例如我的 GitHub 账号名称是 KimTianpanpan

![](/gitUserName.png)

新建仓库, Repository name 就填写为 kimtianpan.github.io (因为在这之前我建立过仓库了,所以有此提示)

![](/gitHub建立仓库.png)

这个仓库建好后不用克隆到本地, 内容放到另外一个仓库中去

### 新建仓库二 : 随便起一个项目名字,比如 myVuepress (克隆岛本地)

这个项目就是开发博客的

自己从头搭建,将 vuepressDemo 文件夹的内容拷贝到仓库二中,并且在根目录下创建 deploy.sh 文件 , 内容如下:

``` 
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:USERNAME/USERNAME.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
```

### 修改仓库二中的 deploy.sh 发布

把文件中的 USERNAME 改成 Github 账号名 , 例如我账号名称是  KimTianPan ,那么就改为 

git push -f git@github.com:KimTianPan/kimtianpan.github.io.git master

这样仓库二和仓库一就建立了关联。

简单说二者的关系是：仓库一负责显示网站内容，我们不需要改动它；日常开发和新增内容，都在仓库二中，并通过 npm run deploy 命令，将代码发布到仓库一。

### 在 package.json 文件中添加发布命令 (使用工具包的请忽略)

"scripts": {
  "deploy": "bash deploy.sh"
}

### npm run deploy

此时打开 Github Settings 中下面的链接: https://kimtianpan.github.io/ 即可看到自己的主页啦~

![](/git网址.png)

pc的样子

![](/首页.png)

### vuepress热编译浏览器不自动更新

#### 问题：本地开发模式运行Vuepress 1.x 时，浏览器不能自动更新

在 package.json 中将运行命令 由

"dev": "vuepress dev docs"

改为

"dev": "vuepress dev docs --temp .temp"

即可解决

::: warning 注意
附：
因为届时运行 vuepress 会生成一个临时文件夹 .temp，可以在 .gitignore 中忽略掉该文件夹：
:::

```
# vuepress temp file

.temp
```
## 最后
你需要一些 <a href="https://ouweiya.gitbooks.io/markdown/content/" target="_black">Markdown</a>、  <a href="https://www.runoob.com/markdown/md-tutorial.html" target="_black">Markdown菜鸟教程</a> 语法的基础知识；

你需要一个 <a href="https://github.com/" target="_black">Github</a> 账号，并在里面创建两个 repo

Github 需要添加 ssh key，遇到问题可以百度解决；