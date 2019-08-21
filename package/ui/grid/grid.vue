<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 09:25:00
 * @LastEditTime: 2019-08-21 13:09:23
 * @LastEditors: Please set LastEditors
 -->
<script>
const config = {
  row: 24, // [ number ] 栅格数
  gutter: 0, // [ number ] 间距
  gutterRow: 0, // [ number ]  垂直方向上的间距
  justify: "flex-start", // [ string ]
  items: "flex-start" // [ string ]
};
const instance = {};
instance.name = "vui-grid";
instance.props = {
  row: {
    type: [Number],
    default: config.row
  },
  gutter: {
    type: [Number],
    default: config.gutter
  },
  gutterRow: {
    type: [Number],
    default: config.gutterRow
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
    name: "vui-grid"
  };
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
instance.computed = {
  rowClassName() {
    let className = ["vui-grid"];
    if (this.justify) {
      className.push("vui-grid-justify--" + this.justify);
    }
    if (this.items) {
      className.push("vui-grid-items--" + this.items);
    }
    return className;
  },
  rowStyle() {
    let style = {};
    if (this.gutter) {
      style["margin-left"] = -this.gutter / 2 + "px";
      style["margin-right"] = -this.gutter / 2 + "px";
    }
    if (this.gutterRow) {
      style["margin-top"] = -this.gutterRow / 2 + "px";
      style["margin-bottom"] = -this.gutterRow / 2 + "px";
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