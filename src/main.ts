import { createApp } from 'vue'
import './style.css'
import { VueFire } from 'vuefire'
import App from './App.vue'
import { firebaseApp } from '../firebase'
import {createPinia} from "pinia";
const pinia = createPinia()

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
	components,
	directives,
})

const app = createApp(App)
app.use(pinia)
app.use(vuetify)
app.use(VueFire, {
	firebaseApp,
	modules: [
	],
})

app.mount('#app')
