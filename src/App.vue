<template>
  <div id="app">
    <div class="  vui-padding--larger">
      <div class="main-box"></div>

      <div class="inner"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";

import { Loading, Input, Image } from "../package/ui/index.js";
Vue.use(Loading.Cross)
  .use(Loading.Circle)
  .use(Loading.Wave)
  .use(Input)
  .use(Image);
export default {
  data() {
    return {
      money: ""
    };
  },
  components: {},
  name: "App",
  mounted() {},
  methods: {
    change(e) {
      console.log(e);
    }
  },
  watch: {
    money(val) {
      //console.log(val);
    }
  }
};
</script>

<style>
.main-box {
  position: relative;
  height: 50px;
  display: inline-block;
  width: 50px;
}
.main {
  position: relative;
  height: 400%;
  width: 400%;
  border: 1px solid red;
  transform: scale(0.25);
  transform-origin: 0 0;
}
.inner {
  height: 100px;
  width: 100px;
  border-radius: 1000em;
  border: 1px solid blue;
}
.sub {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: scaleX(0.5);
  transform-origin: 100% 0;
}
</style>



