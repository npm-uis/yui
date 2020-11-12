/**
 * @file        : index.js
 * @description : 'switch' is a component
 * @author      : YanXianPing
 * @creatTime   : 2020/11/10 11:00
 */
import Switch from './src/index.vue';

Switch.install = (Vue) => {
    // 注册全局组件
    Vue.component(Switch.name, Switch);
};

export {Switch};
export default Switch;
