import { createApp } from 'vue'
import App from './App.vue'

import router from '../src/router/router'
// styles
import './assets/style.css'

const app = createApp(App)
app.use(router)
app.mount('#app')