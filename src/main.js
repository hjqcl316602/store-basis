import Vue from "vue";
import { router, store, root } from "./exchange";
console.log(Vue.http);
new Vue({
  el: "#app",
  router,
  store,
  components: { root },
  template: "<root/>"
});
