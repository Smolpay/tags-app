import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import './assets/styles/main.scss'
import 'vuetify/dist/vuetify.min.css'

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app')
