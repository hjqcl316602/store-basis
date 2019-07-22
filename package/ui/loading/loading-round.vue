<script>
import { loading } from "../config/index";
export default {
  name: "vui-loading-round",
  data() {
    return {};
  },
  props: {
    layerColor: {
      type: String,
      default: loading.round.layerColor
    },
    size: {
      type: Number,
      default: loading.round.size
    },
    color: {
      type: String,
      default: loading.round.color
    }
  },
  computed: {
    roundStyle() {
      let style = {};
      style["width"] = `${this.size}px`;
      style["height"] = `${this.size}px`;
      style["background-color"] = this.layerColor;
      return style;
    },
    roundPathStyle() {
      let style = {};
      //style["stroke"] = "blue";
      style["stroke-width"] = "50px";
      return style;
    }
  }
};
</script>

<template>
  <div class="vui-loading-round" :style="roundStyle">
    <svg viewBox="0 0 1060 1060" class="vui-loading-round__svg" width="100%" height="100%">
      <defs>
        <linearGradient id="orange_red" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop
            offset="0%"
            style="stop-color:rgb(255,255,255);
stop-opacity:1"
          />
          <stop
            offset="100%"
            style="stop-color:rgb(255,255,255);
stop-opacity:0"
          />
        </linearGradient>
      </defs>
      <path
        d="M 530 530 m -500, 0 a 500, 500 0 1, 1 1000, 0 a 500, 500 0 1, 1 -1000, 0"
        :style="roundPathStyle"
        stroke="url(#orange_red)"
        class="vui-loading-round__path"
      />
    </svg>
  </div>
</template>

<style   scoped>
</style>