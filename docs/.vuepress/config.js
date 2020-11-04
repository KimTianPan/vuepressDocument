module.exports = {
  themeConfig: {
    searchMaxSuggestions: 10,
    nav: [{
        text: "React",
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
      '/React/': [
        // {
        //   title: '',
        //   collapsable: false,
        //   children: [
        //     ['reactBase/reactBase.md', 'react 基础使用']
        //   ]
        // },
        {
          title: '',
          collapsable: false,
          children: [
            ['/React/', '获取地址组件地址']
          ]
        },
        {
          title: 'React 公共组件',
          collapsable: false,
          children: [
            ['publicComponent/content-box.md', ' 容器组件'],
            ['publicComponent/echarts.md', 'echarts 组件'],
          ]
        },
        {
          title: 'React 业务组件',
          collapsable: false,
          children: [
            ['reactComponent/form.md', '包装form'],
            ['reactComponent/user.md', '选人控件'],
          ]
        }
      ]
    },

  }
}