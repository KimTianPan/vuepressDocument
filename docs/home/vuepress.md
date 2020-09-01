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
