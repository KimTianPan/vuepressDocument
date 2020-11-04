### 组件使用

```javascript
import { EchartsContaiter } from '@/componentsChart/EchartsContaiter' // 引入自己的组件放置的地方;

<EchartsContaiter
  options={{
    options: PieOptions.coalVarietyStorage,
    width: '100%',
    height: '200px',
    id: 'huantu2',
  }}
/>
```

| 参数    | 说明                | 类型                                                                                                   |        |
| ------- | ------------------- | ------------------------------------------------------------------------------------------------------ | ------ |
| options | 传入内容配置 (必填) | Object                                                                                                 |        |
|         | 参数                | 说明                                                                                                   | 类型   |
|         | options             | echars options 配置项(<a href="https://echarts.apache.org/zh/index.html" target="_black">移步官网</a>) | Object |
|         | width               | 设置图表宽度                                                                                           | string |
|         | iconheight          | 设置图表高度                                                                                           | string |
|         | id                  | 唯一 Id (渲染的 box)                                                                                   | string |
