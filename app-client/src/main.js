import Vue from 'vue'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify.js'

import PortalVue from 'portal-vue';
import App from './App.vue';
import { routes } from '@/routes.js';
import { store } from './store/store.js';


Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(PortalVue);

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  const App_NAME = "Kradle" 
  document.title = `${App_NAME} ${to.name}`;
  next();
})

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App)
})