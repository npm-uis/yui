import {createApp} from 'vue';
import App from './App.vue';
import Yui from '../packages/yui/index';

const app = createApp(App);
/** install Yui */
app.use(Yui);

app.mount('#app');
