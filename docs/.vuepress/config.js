module.exports = {
  themeConfig: {
    searchMaxSuggestions: 10,
    nav: [{
        text: '入门兴趣',
        link: '/home/'
      },
      {
        text: "Vue",
        link: '/Vue/'
      },
      {
        text: "React",
        link: '/React/'
      }
    ],
    sidebar: {
      '/home/': [{
        title: '入门兴趣', // 必要的
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
          ['reactBase.md','react基础']
        ]
      }]
    }
  }
}