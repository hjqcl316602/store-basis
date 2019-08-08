<script>
import { addRule } from "../utils/dom";
const instance = {};
instance.name = "vui-border";
instance.props = {
  size: { type: Number },
  color: { type: String },
  radius: { type: Number },
  left: { type: Boolean },
  right: { type: Boolean },
  top: { type: Boolean },
  bottom: { type: Boolean },
  type: { type: String }
};
instance.data = function() {
  return {};
};
instance.methods = {
  setStyle() {
    this.$nextTick(() => {
      let style = {};
      style["borderColor"] = this.color;
      style["borderStyle"] = this.type;
      style["height"] = 100 * (1 / this.size) + "%";
      style["width"] = 100 * (1 / this.size) + "%";
      style["transform"] = "scale(" + this.size + ")";
      if (this.bottom) {
        style["borderBottomWidth"] = "1px";
      }
      addRule(".jui-border:after", style);
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
  <div class="jui-border">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>