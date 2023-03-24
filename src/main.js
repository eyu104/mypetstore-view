import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'dayjs/locale/zh-cn'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'//国际化
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import LoginForm from "./assets/LoginForm.css";

import 'element-plus/dist/index.css'
// import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use( VueAxios , axios)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
