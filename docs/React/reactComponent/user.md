### 组件使用

```javascript
   -- 请求地址根据业务 自行去更改 组件内部地址
import { DTUser } from '@/components/DTUser';

<DTUser
  visible={this.state.visible}
  isSingle={true}
  onClose={this.onClose}
  onSumbit={this.onSumbit}
></DTUser>
```

| 参数     | 说明         | 类型     |
| -------- | ------------ | -------- |
| visible  | 显示选人抽屉 | Boolean  |
| isSingle | 是否单选     | Boolean  |
| onClose  | 控制关闭回调 | function |
| onSumbit | 选择后回调   | function |
