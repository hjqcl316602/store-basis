<script>
import { ratio } from "../config";
export default {
  name: "vui-ratio",
  data() {
    return {};
  },
  props: {
    ratio: {
      type: Number,
      default: ratio.ratio
    }
  },
  computed: {
    ratioStyle() {
      return {
        paddingTop: 100 / this.ratio + "%"
      };
    }
  }
};
</script>

<template>
  <div class="vui-ratio">
    <div class="vui-ratio__wrap" :style="ratioStyle">
      <div class="vui-ratio__inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style   scoped>
</style>