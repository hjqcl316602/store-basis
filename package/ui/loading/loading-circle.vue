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
    }
  },
  computed: {
    style() {
      return {
        height: this.size * 5 + "px",
        width: this.size * 5 + "px"
      };
    },
    itemStyle() {
      return { backgroundColor: this.color };
    }
  },
  data() {
    return {};
  }
};
</script>

<template>
  <div class="vui-loading-circle" :style="style">
    <div class="vui-list vui-list-1">
      <div class="vui-item vui-item-1" :style="itemStyle"></div>
      <div class="vui-item vui-item-2" :style="itemStyle"></div>
      <div class="vui-item vui-item-3" :style="itemStyle"></div>
      <div class="vui-item vui-item-4" :style="itemStyle"></div>
    </div>
    <div class="vui-list vui-list-2">
      <div class="vui-item vui-item-1" :style="itemStyle"></div>
      <div class="vui-item vui-item-2" :style="itemStyle"></div>
      <div class="vui-item vui-item-3" :style="itemStyle"></div>
      <div class="vui-item vui-item-4" :style="itemStyle"></div>
    </div>
    <div class="vui-list vui-list-3">
      <div class="vui-item vui-item-1" :style="itemStyle"></div>
      <div class="vui-item vui-item-2" :style="itemStyle"></div>
      <div class="vui-item vui-item-3" :style="itemStyle"></div>
      <div class="vui-item vui-item-4" :style="itemStyle"></div>
    </div>
  </div>
</template>

<style   scoped>
</style>