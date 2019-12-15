import Vue from 'vue'
import App from './App.vue'

// primitive-ui lib
// https://taniarascia.github.io/primitive/
import '../node_modules/primitive-ui/dist/css/main.min.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
