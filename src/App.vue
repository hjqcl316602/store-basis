<template>
  <div id="app">
    <div class="main"></div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import "../package/ui/style/input.css";
import "../package/ui/style/loading-wave.css";
import "../package/ui/style/loading-circle.css";
import "../package/ui/style/loading-cross.css";
import "../package/ui/style/image.css";
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
  mounted() {
    // let mi = 1000000000;
    // setInterval(function() {
    //   for (let n = 0; n < 10000000; n++) {
    //     console.log(n);
    //   }
    //   mi -= 1000;
    //   console.log(mi);
    // }, 1000);
  },
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
.main {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sub {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: scaleX(0.5);
  transform-origin: 100% 0;
}
</style>



