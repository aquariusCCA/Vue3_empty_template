import App from './App.vue';
import { createApp } from 'vue';

// 引入 Router
import router from './router/index.ts';

// 引入 ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// ElementPlus 國際化配置
import zhTw from 'element-plus/dist/locale/zh-tw.mjs';

// 引入 Tailwind CSS
import './assets/tailwind.css';

// 引入 pinia
import { createPinia } from 'pinia';
// 引入 pinia-plugin-persistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// 引入svgBundle
import '../svg/svgBundle.js';

// 引入 Service Worker
import { startWorker } from './mocks/browser';

// 引入假資料
import { setSeeds } from './mocks/seed.ts';

// 開發環境可使用 API 假資料
if (import.meta.env.DEV) {
  // 注入假資料
  setSeeds();

  // 註冊 Mock Service Worker 實例
  await startWorker();
}

const app = createApp(App);

app.use(router);
app.use(ElementPlus, {
  locale: zhTw
});

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.mount('#app');
