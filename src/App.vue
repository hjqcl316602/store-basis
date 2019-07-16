<template>
  <div id="app">
    <div class="vui-center" style="height:200px">
      <vui-loading-cross></vui-loading-cross>
      <vui-loading-circle></vui-loading-circle>
    </div>

    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import "../package/ui/style/loading.css";
import { Loading } from "../package/ui/index.js";
Vue.use(Loading.Cross).use(Loading.Circle);
export default {
  components: {},
  name: "App",
  mounted() {},
  methods: {
    change() {}
  }
};
</script>

<style>
.name {
  height: 100px;
  background: red;
}
.blue {
  height: 100px;
  background: blue;
}
</style>



