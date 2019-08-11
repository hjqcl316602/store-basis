<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 09:25:00
 * @LastEditTime: 2019-08-11 11:15:00
 * @LastEditors: Please set LastEditors
 -->
<script>
const config = {
  row: 24, // [ number ] 栅格数
  gutter: 0, // [ number ] 间距
  gutterVer: 0, // [ number ]  垂直方向上的间距
  justify: "flex-start", // [ string ]
  items: "flex-start" // [ string ]
};
const instance = {};
instance.name = "vui-row";
instance.props = {
  row: {
    type: [Number],
    default: config.row
  },
  gutter: {
    type: [Number],
    default: config.gutter
  },
  gutterVer: {
    type: [Number],
    default: config.gutterVer
  },
  justify: {
    type: [String],
    default: config.justify
  },
  items: {
    type: [String],
    default: config.items
  }
};
instance.data = function() {
  return {
    spans: [],
    name: "vui-row"
  };
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
instance.computed = {
  rowClassName() {
    let className = ["vui-row"];
    if (this.justify) {
      className.push("vui-row-justify--" + this.justify);
    }
    if (this.items) {
      className.push("vui-row-items--" + this.items);
    }
    return className;
  },
  rowStyle() {
    let style = {};
    if (this.gutter) {
      style["margin-left"] = -this.gutter / 2 + "px";
      style["margin-right"] = -this.gutter / 2 + "px";
    }
    if (this.gutterVer) {
      style["margin-top"] = -this.gutterVer / 2 + "px";
      style["margin-bottom"] = -this.gutterVer / 2 + "px";
    }
    return style;
  }
};
export default instance;
</script>

<template>
  <div :class="rowClassName" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>