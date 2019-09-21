import Vue from "vue";
import App from "./App";
import { router } from "./package";

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
