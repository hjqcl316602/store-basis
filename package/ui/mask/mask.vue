<script>
import { mask } from "../config";
const instance = {};
instance.name = "vui-mask";
instance.props = {
  value: { type: Boolean, default: mask.value },
  closable: { type: Boolean, default: mask.closable },
  scrollable: { type: Boolean, default: mask.scrollable }
};
instance.data = function() {
  return {};
};
instance.methods = {
  transition() { 
    let elem = this.$el;
    if (this.value) {
      elem.classList["remove"]("vui-mask--hide");
      !this.scrollable && document.body.classList["add"]("vui-locked");
    } else {
      document.body.classList["remove"]("vui-locked");
      // elem.addEventListener("transitionend", function(e) {
      //   elem.classList["add"]("vui-mask--hide");
      // });
    }
  },
  handler() {
    this.closable && this.$emit("input", false);
    this.$emit("click");
  }
};
instance.created = function() {};
instance.mounted = function() {
  this.transition();
};
instance.updated = function() {
  this.transition();
};
instance.computed = {
  maskClassName() {
    let className = ["vui-mask"];
    if (this.value) {
      className.push("vui-mask--active");
    }
    return className;
  }
};

export default instance;
</script>

<template>
  <div :class="maskClassName" @click="handler">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>