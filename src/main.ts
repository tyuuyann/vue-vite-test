import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// ----- router ----- //
import VueRouter from './router'
// ----- router end -----//

// ----- Vuetify ----- //
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const vuetify = createVuetify({
  components,
  directives,
})
// ----- Vuetify end ----- //


createApp(App).use(vuetify).use(VueRouter).component('VueDatePicker', VueDatePicker).mount('#app')
