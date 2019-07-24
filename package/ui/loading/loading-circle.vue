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
    itemSize: {
      type: Number,
      default: loading.cricle.itemSize
    }
  },
  computed: {
    listStyle() {
      return {
        height: this.size + "px",
        width: this.size + "px"
      };
    },
    itemStyle() {
      let style = {};
      style["backgroundColor"] = this.color;
      style["width"] = this.itemSize + "px";
      style["height"] = this.itemSize + "px";
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
    <div class="vui-loading-circle__list">
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
    </div>
    <div class="vui-loading-circle__list">
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
    </div>
    <div class="vui-loading-circle__list">
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
      <div class="vui-loading-circle__item" :style="itemStyle"></div>
    </div>
  </div>
</template>

<style   scoped>
</style>