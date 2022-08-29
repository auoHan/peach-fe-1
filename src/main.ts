import { createApp } from 'vue'
import { App } from './App'
import { router } from '@/router'
import '@svgstore';
import { createPinia,storeToRefs  } from 'pinia';

const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(pinia)
app.mount('#app')