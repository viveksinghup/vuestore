import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index'
import DKToast from 'vue-dk-toast';

createApp(App).use(DKToast, {
    positionX: 'right',
    positionY: 'top',
    styles: {
             height: '50px',
            },
}).use(router).mount('#app')

