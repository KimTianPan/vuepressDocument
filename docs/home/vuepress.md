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

config.js 代码

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

README.md 代码

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