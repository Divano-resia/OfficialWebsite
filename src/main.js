import { createApp } from 'vue'
import App from './App.vue'
import axios from "axios";
import router from "./router/router";


const app=createApp(App);
let baseURL = "/api";
baseURL = ''

axios.defaults.baseURL = baseURL;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$ImageUrl ="https://jzdcollection.oss-cn-hangzhou.aliyuncs.com/jzd/";
axios.defaults.timeout = 30000;

app.use(router).mount("#app")