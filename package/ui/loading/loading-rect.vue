<script>
import { loading } from "../config/index";
export default {
  name: "vui-loading-rect",
  data() {
    return {};
  },
  props: {
    strokeWidth: {
      type: Number,
      default: loading.rect.stokeWidth
    },
    strokeSize: {
      type: Number,
      default: loading.rect.strokeSize
    },
    strokeNumber: {
      type: Number,
      default: loading.rect.strokeNumber
    },
    layerColor: {
      type: String,
      default: loading.rect.layerColor
    },
    duraction: {
      type: Number,
      default: loading.rect.duraction
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
      style["stroke-width"] = `${this.strokeWidth}px`;
      style["stroke"] = this.color;
      style["stroke-dasharray"] = `${80 * this.strokeSize},${320 -
        80 * this.strokeSize}`;
      style["animation-duration"] = `${this.duraction}ms`;
      return style;
    },
    rectPathNormalStyle() {
      let style = {};
      style["fill"] = "none";
      style["stroke-width"] = `${this.strokeWidth}px`;
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
    <svg viewBox="0 0 100 100" class="vui-loading-rect__svg">
      <path
        d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
        :style="rectPathNormalStyle"
      />
      <path
        class="vui-loading-rect__path"
        d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
        :style="rectPathStyle"
      />
      <path
        v-if="strokeNumber > 3"
        class="vui-loading-rect__path"
        d="M 90 10 L 90 90 L 10 90 L 10 10 Z"
        :style="rectPathStyle"
      />
      <path
        v-if="strokeNumber > 1"
        class="vui-loading-rect__path"
        d=" M 90 90 L 10 90 L 10 10 L  90 10 Z"
        :style="rectPathStyle"
      />
      <path
        v-if="strokeNumber > 3"
        class="vui-loading-rect__path"
        d="  M 10 90 L 10 10 L  90 10 L  90 90 Z"
        :style="rectPathStyle"
      />
    </svg>
  </div>
</template>

<style   scoped>
</style>

