# Switch
> 【TYPE】 Form
>

用于页面中两种互斥状态的切换，即 [开/关]



#### 基础用法

```vue
<div id="app">
	<y-switch v-model="value" active-color="green" inactive-color="red"></y-switch>
</div>
```

```javascript
import Vue from 'vue';
import Switch from '@npm-yui/switch';
// or 
// import {Switch} from '@npm-yui/switch';

Vue.use(Switch);

// then, the `ySwitch` is registered as a global component
new Vue({
    el: '#app'
})
```



#### Attributes

| 参数           | 说明                 | 类型    | 可选值     | 默认值  |
| -------------- | -------------------- | ------- | ---------- | ------- |
| v-model        | 绑定值               | boolean | true/false | true    |
| active-color   | switch打开是的背景色 | string  | \          | #409eff |
| inactive-color | switch关闭时的背景色 | string  | \          | #c0ccda |
|                |                      |         |            |         |

#### Events

| 事件名称 | 说明                     | 回调参数                |
| -------- | ------------------------ | ----------------------- |
| change   | switch状态发生改变时触发 | 新状态值（true\|false） |

