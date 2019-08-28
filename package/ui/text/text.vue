<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 17:50:08
 * @LastEditTime: 2019-08-28 18:46:16
 * @LastEditors: Please set LastEditors
 -->
<script>
const config = {
  long: false,
  bold: false, // 加粗
  color: "",
  size: "",
  colors: [
    "primary",
    "danger",
    "warning",
    "success",
    "black",
    "dark",
    "light",
    "gray",
    "white"
  ],
  sizes: ["smaller", "small", "medium", "large", "larger"]
};
const instance = {};
instance.name = "vui-text";
instance.props = {
  long: { type: Boolean, default: config.long },
  bold: { type: Boolean, default: config.bold },
  size: { type: String, default: config.size },
  color: { type: String, default: config.color }
};
instance.data = function() {
  return {};
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
instance.computed = {
  styles() {
    let className = ["vui-text"];
    let style = {};
    if (this.long) {
      className.push("vui-text--long");
    }
    if (this.bold) {
      className.push("vui-text--bold");
    }
    if (this.size) {
      if (config.sizes.includes(this.size)) {
        className.push("vui-text--" + this.size);
      } else {
        style["font-size"] = this.size;
      }
    }
    if (this.color) {
      if (config.colors.includes(this.color)) {
        className.push("vui-text--" + this.color);
      } else {
        style["color"] = this.color;
      }
    }
    return {
      className,
      style
    };
  }
};
export default instance;
</script>

<template>
  <div :class="styles.className" :style="styles.style">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>