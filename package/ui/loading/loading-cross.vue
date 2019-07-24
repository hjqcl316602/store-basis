<script>
import { loading } from "../config/index";
export default {
  name: "vui-loading-cross",
  props: {
    color: {
      type: String,
      default: loading.cross.color
    },
    size: {
      type: Number,
      default: loading.cross.size
    },
    duration: {
      type: Number,
      default: loading.cross.duration
    }
  },
  data() {
    return {};
  },
  computed: {
    style() {
      return {
        height: this.size + "px",
        width: this.size + "px"
      };
    },
    itemStyle() {
      let style = {};
      style["backgroundColor"] = this.color;
      style["animation-duration"] = this.duration + "ms";
      return style;
    }
  }
};
</script>

<template>
  <div class="vui-loading-cross" :style="style">
    <div class="vui-loading-cross__wrap">
      <div class="vui-loading-cross__item" :style="itemStyle"></div>
      <div class="vui-loading-cross__item" :style="itemStyle"></div>
      <div class="vui-loading-cross__item" :style="itemStyle"></div>
      <div class="vui-loading-cross__item" :style="itemStyle"></div>
    </div>
  </div>
</template>

<style   scoped>
</style>