import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 导入路由

// 创建 Vue 应用实例
const app = createApp(App);

// 使用路由
app.use(router);

// 挂载应用到 HTML 的 #app 元素
app.mount('#app');
