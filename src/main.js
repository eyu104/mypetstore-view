import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'dayjs/locale/zh-cn'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'//国际化 未使用
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import axios from 'axios'
import VueAxios from 'vue-axios'
import LoginForm from "./assets/LoginForm.css?inline";

import 'element-plus/dist/index.css'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use( VueAxios , axios)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')
