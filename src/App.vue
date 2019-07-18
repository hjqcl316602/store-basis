<template>
  <div id="app">
    <div
      class="vui-padding--large"
      style="height:200px;background-color:#fff;padding:10px;padding-top:50px"
    >
      <!-- <vui-loading-cross></vui-loading-cross>
      <vui-loading-circle></vui-loading-circle> -->
      <!-- <vui-input
        prepend
        prepend-text="姓名"
        prepend-width="60px"
        placeholder="请输入您的真实姓名..."
        border
        size="larger"
        borderType="bottom"
        type="text"
        @click="change"
      >
      </vui-input> -->
      <div class="test"></div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import "../package/ui/style/input.css";
import "../package/ui/style/loading.css";
import { Loading, Input } from "../package/ui/index.js";
Vue.use(Loading.Cross)
  .use(Loading.Circle)
  .use(Input);
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
.test {
  height: 100px;
  width: 150px;
  background-image: url("./image/zly.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: auto;
  /* 全部覆盖
    background-image: url("./image/zly.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    以最小边占完，并水平垂直居中
    background-image: url("./image/zly.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    以最小边占完，并水平垂直居中
    background-image: url("./image/zly.jpg");
    background-size:contain;
    background-repeat: no-repeat;
    background-position: center center; 
  */
}
</style>



