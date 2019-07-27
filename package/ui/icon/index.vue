<script>
import { Icon, icon } from "../config";

export default {
  name: "vui-icon",
  props: {
    size: {
      type: Number,
      default: icon.size
    },
    name: {
      type: String,
      default: icon.name
    },
    color: {
      type: String,
      default: icon.color
    }
  },
  data() {
    return {};
  },
  computed: {
    iconStyle() {
      let style = {};
      style["color"] = this.color;
      style["font-size"] = this.size + "px";
      return style;
    }
  }
};
</script>

<template>
  <div
    class="vui-icon"
    :style="iconStyle"
    :class="'vui-icon--' + this.name"
  ></div>
</template>

<style   scoped>
</style>