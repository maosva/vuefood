import Vue from 'vue'
import defaultTemplate from './Layouts/defaultTemplate'
import router from './routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(defaultTemplate),
  router,
  mode: 'history'
}).$mount('#app')
