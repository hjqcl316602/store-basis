<template>
  <div id="app">
    <div class="vui-padding--large" style="height:200px;background-color:#fff">
      <!-- <vui-loading-cross></vui-loading-cross>
      <vui-loading-circle></vui-loading-circle> -->
      <div class="vui-input vui-input--smaller">
        <div class="vui-input--label">
          名称
        </div>
        <div class="vui-input--close"></div>
        <input type="text" placeholder="请输入文本... " />
        <div class="vui-input--message"></div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import "../package/css/main/input.css";
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
</style>



