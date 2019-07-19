// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
Vue.config.productionTip = false;
import * as ui from 'store-vue-ui';
import * as store from 'store-es';
import '../package/css/basis/index.css';
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
