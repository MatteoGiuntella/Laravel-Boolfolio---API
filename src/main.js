import { createApp } from 'vue'
import { router } from './router.js'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount('#app');
AOS.init();
