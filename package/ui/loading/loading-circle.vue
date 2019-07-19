<script>
import { loading } from "../config/index";
export default {
  name: "vui-loading-circle",
  props: {
    color: {
      type: String,
      default: loading.cricle.color
    },
    size: {
      type: Number,
      default: loading.cricle.size
    },
    diameter: {
      type: Number,
      default: loading.cricle.diameter
    }
  },
  computed: {
    listStyle() {
      return {
        height: this.diameter * 1.414 + "px",
        width: this.diameter * 1.414 + "px"
      };
    },
    itemStyle() {
      let style = {};
      style["backgroundColor"] = this.color;
      style["width"] = this.size + "px";
      style["height"] = this.size + "px";
      return style;
    }
  },
  data() {
    return {};
  }
};
</script>

<template>
  <div class="vui-loading-circle" :style="listStyle">
    <div class="vui-loading-circle--list">
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
    </div>
    <div class="vui-loading-circle--list">
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
    </div>
    <div class="vui-loading-circle--list">
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
      <div class="vui-loading-circle--item" :style="itemStyle"></div>
    </div>
  </div>
</template>

<style   scoped>
</style>