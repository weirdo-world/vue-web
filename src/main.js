import { createApp } from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

createApp(App).use(router).mount('#app')
