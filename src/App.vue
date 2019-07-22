<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color:#fff">
      <div class="main">
        <vui-loading-round></vui-loading-round>
        <vui-loading-round></vui-loading-round>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { Loading, Input, Image } from "../package/ui/index.js";
Vue.use(Loading.Round);
export default {
  data() {
    return {};
  },
  components: {},
  name: "App",
  mounted() {},
  methods: {
    change(e) {
      console.log(e);
    }
  },
  computed: {
    layerStyle() {
      //let offset = (PERIMETER * (100 - this.value)) / 100;
      //offset = this.clockwise ? offset : PERIMETER * 2 - offset;
      return {
        fill: "none",
        stroke: "red",
        strokeDashoffset: `100px`,
        strokeWidth: `40px`
      };
    },

    hoverStyle() {
      return {
        fill: "none",
        stroke: "blue",
        strokeWidth: "1px"
      };
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
.svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.svg-inner {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: 530px 530px;
  transform-origin: 530px 530px;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 3140;
  stroke-dashoffset: 3140;
}
.main {
  position: relative;
  width: 450px;
  height: 450px;
}
.pure_top {
  width: 0;
  height: 0;
  border-left: 100px solid red;
  border-top: 100px solid blue;
  border-right: 100px solid green;
  border-bottom: 50px solid yellow;
  border-radius: 30px;
}
</style>



