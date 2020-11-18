import {App} from 'vue';
import Toast from './src/index';

export default (app: App): void => {
    app.config.globalProperties[Toast.name] = Toast;
}

export {Toast} ;
