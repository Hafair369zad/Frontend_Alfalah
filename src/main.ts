import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { router } from './router';
import vuetify from './plugins/vuetify';
import '@/scss/style.scss';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import VueApexCharts from 'vue3-apexcharts';
import VueTablerIcons from 'vue-tabler-icons';
import axiosInstance from './plugins/axios'; 


// print
import print from 'vue3-print-nb';

const app = createApp(App);
// fakeBackend();
app.use(router);
app.use(PerfectScrollbarPlugin);
app.use(createPinia());
app.use(VueTablerIcons);
app.use(print);
app.use(VueApexCharts);


// Menjadikan Axios sebagai properti global
app.config.globalProperties.$axios = axiosInstance;


app.use(vuetify).mount('#app');
