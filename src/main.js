import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css';
import 'element-plus/dist/index.css';

const app = createApp(App);
app.use(router).use(ElementPlus).use(createPinia()).mount('#app');
