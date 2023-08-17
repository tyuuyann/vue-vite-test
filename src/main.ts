import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// ----- router ----- //
import VueRouter from './router'
// ----- store -----//
import store from './store'

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

let app = createApp(App)

app.config.errorHandler = function(err, vm, info) {
  console.log(err)
  console.log(vm)
  console.log(info)
  // VueRouter.replace("/")
}

app.use(vuetify).use(VueRouter).use(store).component('VueDatePicker', VueDatePicker).mount('#app')
