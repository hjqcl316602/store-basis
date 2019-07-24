<script>
import { loading } from "../config/index";
export default {
  name: "vui-loading-round",
  data() {
    return {
      value: 542
    };
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
    itemImage: {
      type: String,
      default: loading.round.itemImage
    },
    itemWidth: {
      type: Number,
      default: loading.round.itemWidth
    },
    duration: {
      type: Number,
      default: loading.round.duration
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
    roundCircleStyle() {
      let style = {};
      //style["stroke"] = "blue";
      style["stroke-width"] = this.itemWidth;
      style["animation-duration"] = this.duration + "ms";
      return style;
    }
  }
};
</script>

<template>
  <div class="vui-loading-round" :style="roundStyle">
    <svg
      width="440"
      height="440"
      viewBox="0 0 440 440"
      class="vui-loading-round__svg"
    >
      <defs>
        <pattern
          id="pattern-image"
          x="0"
          y="0"
          width="440"
          height="440"
          patternUnits="userSpaceOnUse"
        >
          <image
            :xlink:href="itemImage"
            x="0"
            y="0"
            width="440"
            height="440"
          ></image>
        </pattern>
      </defs>
      <circle
        class="vui-loading-round__circle"
        fill="none"
        stroke="url(#pattern-image)"
        :style="roundCircleStyle"
        stroke-miterlimit="1"
        cx="220"
        cy="220"
        r="160"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<style   scoped>
</style>