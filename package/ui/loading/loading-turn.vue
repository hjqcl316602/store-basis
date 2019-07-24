<script>
import { loading } from "../config/index";
export default {
  name: "vui-loading-turn",
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      default: loading.turn.color
    },
    size: {
      type: Number,
      default: loading.turn.size
    },
    duration: {
      type: Number,
      default: loading.turn.duration
    }
  },
  computed: {
    turnStyle() {
      let style = {};
      style["width"] = `${this.size}px`;
      style["height"] = `${this.size}px`;
      style["background-color"] = this.color;
      style["animation-duration"] = this.duration + "ms";
      return style;
    }
  }
};
</script>

<template>
  <div class="vui-loading-turn" :style="turnStyle"></div>
</template>

<style   scoped>
</style>