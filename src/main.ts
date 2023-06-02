import './assets/main.css'
import App from './App.vue'
import { setupApp } from './app/core/setup'

setupApp(App).subscribe((app) => {
  app.mount('#app')
})
