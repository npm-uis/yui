import {App} from 'vue';
import YSwitch from '@npm-yui/switch'
import YToast from '@npm-yui/toast';

export {
    YToast,
    YSwitch
}
/** called by App.use() */
const install = (app: App) => {
    YSwitch(app);
    YToast(app);
};

const Yui = {
    install
};

export default Yui
