import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'dayjs/locale/zh-cn'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'//国际化 未使用
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import SlideVerify from 'vue-monoplasty-slide-verify'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'element-plus/dist/index.css'


const app = createApp(App).component('font-awesome-icon',FontAwesomeIcon)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use( VueAxios , axios)
app.use(SlideVerify)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app.mount('#app')

// 添加请求拦截器
// 拦截器的第一部分，第二部分在router index.js里面
axios.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    // 判断是否存在token,如果存在将每个页面header添加token
    if (window.localStorage.getItem("token")) {
        config.headers.common['Access-Token'] = window.localStorage.getItem("token");
    }
    return config
})