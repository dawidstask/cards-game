import { createApp } from 'vue'
import './style.css'
import { VueFire } from 'vuefire'
import App from './App.vue'
import { firebaseApp } from '../firebase'
import {createPinia} from "pinia";
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(VueFire, {
	firebaseApp,
	modules: [
	],
})

createApp(App).mount('#app')
