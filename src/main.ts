import App from './App.vue'
import { createApp } from 'vue'

// 引入 Router
import router from './router/index.ts';

// 引入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// ElementPlus 國際化配置
import zhTw from 'element-plus/dist/locale/zh-tw.mjs'

// 引入 Tailwind CSS
import './assets/tailwind.css';

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
  locale: zhTw
})

app.mount('#app')