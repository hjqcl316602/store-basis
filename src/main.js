import Vue from "vue";
import { router, store, root } from "./package";

new Vue({
  el: "#app",
  router,
  store,
  components: { root },
  template: "<root/>"
});
