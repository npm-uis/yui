/**
 * @file        : index.js
 * @description : 'toast' will mount to the Vue property
 * @author      : YanXianPing
 * @creatTime   : 2020/11/6 16:32
 */
import Toast from './src/js/index';

Toast.install = (Vue) => {
    // 添加实例方法
    Vue.prototype[Toast.name] = Toast;
};

export {Toast} ;
export default Toast;
