<script>
import { addRule } from "../utils/dom";
const instance = {};
instance.name = "vui-border";
instance.props = {
  size: { type: Number },
  color: { type: String },
  radius: { type: [Number, String] },
  left: { type: Boolean },
  right: { type: Boolean },
  top: { type: Boolean },
  bottom: { type: Boolean },
  round: { type: Boolean },
  type: { type: String },
  circle: { type: Boolean }
};
instance.data = function() {
  return {};
};
instance.methods = {
  setStyle() {
    this.$nextTick(() => {
      let style = {};
      style["border-color"] = this.color;
      style["border-style"] = this.type;
      style["height"] = 100 * (1 / this.size) + "%";
      style["width"] = 100 * (1 / this.size) + "%";
      style["transform"] = "scale(" + this.size + ")";
      style["border-width"] = 0;
      if (this.circle) {
        style["border-radius"] = "10rem";
      } else {
        style["border-radius"] = parseFloat(this.radius) * 2 + "px";
      }

      if (this.bottom) {
        style["border-bottom-width"] = "1px";
      }
      if (this.top) {
        style["border-top-width"] = "1px";
      }
      if (this.left) {
        style["border-left-width"] = "1px";
      }
      if (this.right) {
        style["border-right-width"] = "1px";
      }
      if (this.round) {
        style["border-width"] = "1px";
      }

      console.log(style);
      addRule(".vui-border:after", style);
    });
  }
};
instance.created = function() {};
instance.mounted = function() {
  this.setStyle();
};
instance.updated = function() {
  this.setStyle();
};
export default instance;
</script>

<template>
  <div
    class="vui-border"
    :style="{
      'border-radius': this.circle ? '10em' : parseFloat(this.radius) + 'px'
    }"
  >
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>