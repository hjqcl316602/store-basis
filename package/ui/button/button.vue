<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 18:26:08
 * @LastEditTime: 2019-08-27 18:47:24
 * @LastEditors: Please set LastEditors
 -->
<script>
const config = {
  long: false,
  pack: false,
  disabled: false,
  color: "",
  size: ""
};
const instance = {};
instance.name = "vui-button";
instance.props = {
  disabled: { type: Boolean, default: config.disabled },
  long: { type: Boolean, default: config.long },
  size: { type: String, default: config.size },
  color: { type: String, default: config.color }
};
instance.data = function() {
  return {};
};
instance.methods = {};
instance.computed = {
  className() {
    let className = ["vui-button"];
    if (this.disabled) {
      className.push("vui-button--disabled");
    }
    if (this.long) {
      className.push("vui-button--long");
    }
    if (this.size) {
      className.push("vui-button--" + this.size);
    }
    if (this.color) {
      className.push("vui-button--" + this.color);
    }
    return className;
  }
};
instance.created = function() {};
instance.mounted = function() {};
export default instance;
</script>

<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>