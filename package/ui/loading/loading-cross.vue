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
      return { backgroundColor: this.color };
    }
  }
};
</script>

<template>
  <div class="vui-loading-cross" :style="style">
    <div class="vui-loading-cross--item" :style="itemStyle"></div>
    <div class="vui-loading-cross--item" :style="itemStyle"></div>
    <div class="vui-loading-cross--item" :style="itemStyle"></div>
    <div class="vui-loading-cross--item" :style="itemStyle"></div>
  </div>
</template>

<style   scoped>
</style>