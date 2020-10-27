module.exports = {
  themeConfig: {
    searchMaxSuggestions: 10,
    nav: [{
        text: "React 组件",
        link: "/React/"
      },
      {
        text: "公司内部前端学习",
        link: '/company/'
      },
      {
        text: '搭建个人博客',
        link: '/home/'
      },
      // {
      //   text: "Vue",
      //   link: '/Vue/'
      // },
      // {
      //   text: "React",
      //   link: '/React/'
      // }
    ],
    sidebar: {
      '/home/': [{
        title: '搭建个人博客', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: [
          ['vuepress.md', 'vuepress建立个人博客']
        ]
      }],
      '/React/': [{
        title: 'react',
        collapsable: false,
        children: [
          ['reactBase.md', 'react基础'],
        ]
      }, {
        title: 'React 组件',
        collapsable:false,
        children:[
          ['reactComponents','依赖'],
          ['reactComponents/echarts.md', 'echarts'],
        ]
      }]
    },

  }
}