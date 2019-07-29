// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
Vue.config.productionTip = false;
import './theme/index.less';
// import '../package/ui/style/index.less';
// import '../package/css/basis/index.less';
// import '../package/css/main/index.less';

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
