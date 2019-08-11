<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 09:25:07
 * @LastEditTime: 2019-08-11 11:15:27
 * @LastEditors: Please set LastEditors
 -->
<script>
const config = {
  span: 0, // [ number ] 占据的栅格数
  fix: true,
  auto: false,
  width: "", // [ number , string ] 宽度
  push: 0, // [ number ] 栅格向右移动格数
  pull: 0 // [ number ] 栅格向左移动格数
};
const instance = {};
instance.name = "vui-span";
instance.props = {
  span: {
    type: Number,
    default: config.span
  },
  push: {
    type: Number,
    default: config.push
  },
  pull: {
    type: Number,
    default: config.pull
  },
  auto: {
    type: Boolean,
    default: config.auto
  },
  width: {
    type: [Number, String],
    default: config.width
  }
};
instance.data = function() {
  return {};
};
instance.methods = {};
instance.created = function() {
  this.$parent.spans.push(this);
};
instance.beforeDestroy = function() {
  this.$parent.spans.splice(this.$parent.items.indexOf(this), 1);
};
instance.mounted = function() {};
instance.computed = {
  spanStyle() {
    let style = {};
    if (this.isRow && !this.auto) {
      if (this.width) {
        style["flex-basis"] =
          typeof this.width === "number" ? this.width + "px" : this.width;
      } else {
        style["flex-basis"] = (100 / this.$parent.row) * this.span + "%";
      }
      let gutter = this.$parent.gutter;
      if (gutter) {
        style["padding-left"] = gutter / 2 + "px";
        style["padding-right"] = gutter / 2 + "px";
      }
      let gutterVer = this.$parent.gutterVer;
      if (gutter) {
        style["padding-top"] = gutterVer / 2 + "px";
        style["padding-bottom"] = gutterVer / 2 + "px";
      }
    }
    if (this.push) {
      style["margin-left"] = (100 / this.$parent.row) * this.push + "%";
    }
    if (this.pull) {
      style["margin-right"] = (100 / this.$parent.row) * this.pull + "%";
    }
    return style;
  },
  spanClassName() {
    let className = [];

    if (this.auto) {
      className.push("vui-span--auto");
    }
    return className;
  },
  isRow() {
    return this.$parent && this.$parent.name === "vui-row";
  }
};
export default instance;
</script>

<template>
  <div class="vui-span" :class="spanClassName" :style="spanStyle">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>