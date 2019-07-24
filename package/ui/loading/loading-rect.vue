<script>
import { loading } from "../config/index";
export default {
  name: "vui-loading-rect",
  data() {
    return {};
  },
  props: {
    itemWidth: {
      type: Number,
      default: loading.rect.itemWidth
    },
    itemScale: {
      type: Number,
      default: loading.rect.itemScale
    },
    itemNumber: {
      type: Number,
      default: loading.rect.itemNumber
    },
    layerColor: {
      type: String,
      default: loading.rect.layerColor
    },
    duration: {
      type: Number,
      default: loading.rect.duration
    },
    size: {
      type: Number,
      default: loading.rect.size
    },
    color: {
      type: String,
      default: loading.rect.color
    }
  },
  computed: {
    rectPathStyle() {
      let style = {};
      style["fill"] = "none";
      style["stroke-width"] = `${this.itemWidth * 10}px`;
      style["stroke"] = this.color;
      style["stroke-dasharray"] = `${800 * this.itemScale},${3200 -
        800 * this.itemScale}`;
      style["animation-duration"] = `${this.duration}ms`;
      return style;
    },
    rectPathNormalStyle() {
      let style = {};
      style["fill"] = "none";
      style["stroke-width"] = `${this.itemWidth * 10}px`;
      style["stroke"] = this.layerColor;
      return style;
    },
    rectStyle() {
      let style = {};
      style["width"] = `${this.size}px`;
      style["height"] = `${this.size}px`;

      return style;
    }
  }
};
</script>

<template>
  <div class="vui-loading-rect" :style="rectStyle">
    <svg viewBox="0 0 1000 1000" class="vui-loading-rect__svg">
      <path
        d="M 100 100 L 900 100 L 900 900 L 100 900 Z"
        :style="rectPathNormalStyle"
      />
      <path
        class="vui-loading-rect__path"
        d="M 100 100 L 900 100 L 900 900 L 100 900 Z"
        :style="rectPathStyle"
      />
      <path
        v-if="itemNumber > 3"
        class="vui-loading-rect__path"
        d="M 900 100 L 900 900 L 100 900 L 100 100 Z"
        :style="rectPathStyle"
      />
      <path
        v-if="itemNumber > 1"
        class="vui-loading-rect__path"
        d=" M 900 900 L 100 900 L 100 100 L  900 100 Z"
        :style="rectPathStyle"
      />
      <path
        v-if="itemNumber > 3"
        class="vui-loading-rect__path"
        d="  M 100 900 L 100 100 L  900 100 L  900 900 Z"
        :style="rectPathStyle"
      />
    </svg>
  </div>
</template>

<style   scoped>
</style>

