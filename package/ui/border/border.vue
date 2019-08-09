<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-19 22:06:51
 * @LastEditTime: 2019-08-09 22:19:55
 * @LastEditors: Please set LastEditors
 -->
<script>
import { addRule } from "../utils/dom";
let hash = 0;
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
  return {
    hash: hash++
  };
};
instance.methods = {
  setStyle() {
    this.$nextTick(() => {
      this.$el.setAttribute(`data-v-${this.hash}`, "");
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
      addRule(`.vui-border[data-v-${this.hash}]:after`, style, "border");
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