# Toast
> 【TYPE】 Notice
>

用于页面中展示提示信息



#### 基础用法

```javascript
import Vue from 'vue';
import Toast from '@npm-yui/toast';
// or 
// import {Toast} from '@npm-yui/toast';

Vue.use(Toast);

// then, the `$yToast` will mount to the prototype of Vue
new Vue({
    el: '#app',
    created(){
        this.$yToast.success('success', true);
    }
})
```



#### Toast Methods

| 方法名  | 说明     | 参数                                      | 参数说明                                    |
| ------- | -------- | ----------------------------------------- | ------------------------------------------- |
| success | 成功提示 | (msg<string> = '', mask<boolean> = false) | msg：提示文案<br />mask：是否显示半透明蒙层 |
| warn    | 警告提示 | (msg<string> = '', mask<boolean> = false) | msg：提示文案<br />mask：是否显示半透明蒙层 |
| danger  | 危险提示 | (msg<string> = '', mask<boolean> = false) | msg：提示文案<br />mask：是否显示半透明蒙层 |
| info    | 普通提示 | (msg<string> = '', mask<boolean> = false) | msg：提示文案<br />mask：是否显示半透明蒙层 |

