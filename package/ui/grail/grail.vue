<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 10:04:04
 * @LastEditTime: 2019-08-15 09:38:14
 * @LastEditors: Please set LastEditors
 -->
<script>
const instance = {};
instance.name = "vui-grail";
instance.props = {};
instance.data = function() {
  return {
    childs: []
  };
};
instance.methods = {
  setStyle() {
    this.childs.forEach(element => {
      let type = element["type"];
      let elStyle = this.$el.style;
      let padding = element["padding"];
      let size = 0;
      elStyle["padding"] = 0;
      if (padding) {
        if (type === "left" || type === "right") {
          size = element.$el.offsetWidth;
        }
        if (type === "top" || type === "bottom") {
          size = element.$el.offsetHeight;
        }
      }
      elStyle["padding-" + type] = size + "px";
    });
  }
};
instance.created = function() {};
instance.mounted = function() {
  console.log("mounted");
  this.$nextTick(() => this.setStyle());
};
instance.updated = function() {
  console.log("updated");
  this.$nextTick(() => this.setStyle());
};
export default instance;
</script>

<template>
  <div class="vui-grail">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>