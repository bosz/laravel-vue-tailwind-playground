import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import store from './store'
import router from './components/router'
import './index.css';

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
