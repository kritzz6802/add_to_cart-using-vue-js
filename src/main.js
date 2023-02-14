import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import './assets/main.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";


library.add(fas);

// createApp(App).mount('#app')
createApp(App).use(router)
.component('fa',FontAwesomeIcon).mount('#app')
