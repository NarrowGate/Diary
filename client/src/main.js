import Vue from 'vue';
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify.js'

import PortalVue from 'portal-vue';
import App from './App.vue';
import { routes } from './routes.js';
import { store } from './store/store.js';

Vue.use(VueRouter);
Vue.use(PortalVue);

const router = new VueRouter({
  routes
});

new Vue({
  el: '#elDemo',
  router,
  store,
  vuetify,
  render: h => h(App)
})
