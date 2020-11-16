import {createApp} from 'vue';
import App from './App';
import Yui from '../packages/yui/index';

const app = createApp(App);

for (let key in Yui) {
    app.use(Yui[key]);
}

app.mount('#app');
