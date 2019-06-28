import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'

import Vuelidate from "vuelidate";

import VueAnalytics from 'vue-analytics'

import Vuetify from 'vuetify'

Vue.use(Vuetify)

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* validate-form */
Vue.use(Vuelidate);

Vue.use(VueAnalytics, {
  id: process.env.GTM_ID,
  router,
  ignoreRoutes: ['/'],
  autoTracking: {
    exception: false
  },
  debug: {
    enabled: false,
    sendHitTask: true
  }
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')
