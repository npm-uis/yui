/**
 * @file        : index.js
 * @description : 'toast' will mount to the Vue property
 * @author      : YanXianPing
 * @creatTime   : 2020/11/6 16:32
 */
import Toast from './src/js/index';

Toast.install = (app) => {
    // 添加实例方法
    app.config.globalProperties[Toast.name] = Toast;
};

export {Toast} ;
export default Toast;
