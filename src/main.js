import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from "./store/store.js";
import VueRouter from 'vue-router';
import router from "./router/index.js";

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  vuetify,
  store,
  router
}).$mount('#app')
