import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import vue3GoogleLogin from 'vue3-google-login';
import store from './store/index';
import BalmUI from 'balm-ui/dist/balm-ui.js'; // Official Google Material Components

import BalmUIPlus from 'balm-ui/dist/balm-ui-plus.js'; // BalmJS Team Material Components
import 'balm-ui/dist/balm-ui.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';

const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId:
    '162662612487-kg206j99a2hkfhosodb2ka4fvli26d62.apps.googleusercontent.com',
});

app.use(router);
app.use(store);
// app.use(BalmUI);
app.use(BalmUIPlus);
app.use(BalmUI, {
  // Optional. Overwrite `<ui-textfield>` props with default value.
  UiTextfield: {
    // some props
  },
  UiCheckbox: {
    // some props
  },
  UiFab: {
    // some props
  },
  $theme: {
    // (Optional) New in 9.28.0, See ThemeColor type in APIs.
  },
});

app.mount('#app');
