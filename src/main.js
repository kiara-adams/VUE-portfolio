// main.js or App.vue
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  // Global settings here (optional)
  offset: 200, // offset (in px) from the original trigger point
  duration: 800, // duration of the animation (in ms)
  easing: 'ease-in-out', // easing function for the animation
  once: true // whether animation should happen only once - while scrolling down
});

createApp(App).use(store).use(router).mount('#app')
