import Vue from "vue";
import App from "./App";
import router from "./router";

import "./theme/index.less";
import "./ui/index.js";

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
