### 组件使用

```javascript
import { ContentBox } from '@/componentsChart/ContentBox' // 引入自己的组件放置的地方;

<ContentBox
  className="margin-top-10"
  options={{
    headerOptions: {
      title: '煤种入库情况',
      icon: true,
      actionList: [],
      // level: 3,
      contentList: [
        <DateRange
          onChange={(value) => {
            if (value.length > 0) {
              setSearchParams({
                startDate: moment(value[0]).format('YYYY-MM-DD'),
                endDate: moment(value[1]).format('YYYY-MM-DD'),
              })
            }
          }}
        />,
      ], // 头部节点数组
    },
    bodyOptions: {
      contentList: [
        <EchartsContaiter
          options={{
            options: PieOptions.coalVarietyStorage,
            width: '100%',
            height: '200px',
            id: 'huantu2',
          }}
        />,
      ],
    },
  }}
/>
```

| 参数    | 说明                | 类型        |                      |                        |
| ------- | ------------------- | ----------- | -------------------- | ---------------------- |
| options | 传入内容配置 (必填) | Object      |                      |
|         | 参数                | 说明        | 类型                 |                        |
|         | headerOptions       | 头部参数    | Object               |
|         |                     | 参数        | 说明                 | 类型                   |
|         |                     | title       | title 文本           | string                 |
|         |                     | icon        | 配置 title 前面 icon | ReactNode 或者 Boolean |
|         |                     | border      | title 底部添加下划线 | Boolean                |
|         |                     | actionList  | title 操作按钮       | ReactNode[]            |
|         |                     | contentList | title 右半部分 按钮  | ReactNode[]            |
|         | bodyOptions         | 内容配置    | Object               |                        |
|         |                     | 参数        | 说明                 | 类型                   |
|         |                     | contentList | 显示内容             | ReactNode              |
