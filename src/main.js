import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/zh-TW';
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';
import './style.css';
import App from './App.vue';

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
  lang: quasarLang,
  config: {
    cssAddon: true,
  },
});

// Assumes you have a <div id="app"></div> in your index.html
myApp.mount('#app');
