// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
Vue.config.productionTip = false;
import * as store from '../package/es';
import './theme/index.css';
/* eslint-disable no-new */

console.log(store);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
