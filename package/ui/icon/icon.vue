<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-26 22:25:03
 * @LastEditTime: 2019-08-10 08:48:57
 * @LastEditors: Please set LastEditors
 -->
<script>
const config = {
  size: "14px", // [ String , Number] 尺寸
  name: "", // [ String ]  名称
  color: "#333" // [ String ] 颜色
};
export default {
  name: "vui-icon",
  props: {
    size: {
      type: [Number, String],
      default: config.size
    },
    name: {
      type: String,
      default: config.name
    },
    color: {
      type: String,
      default: config.color
    }
  },
  data() {
    return {};
  },
  computed: {
    iconStyle() {
      let style = {};
      style["color"] = this.color;
      style["font-size"] =
        typeof this.size === "number" ? this.size + "px" : this.size;
      return style;
    }
  }
};
</script>

<template>
  <div
    class="vui-icon"
    :style="iconStyle"
    :class="'vui-icon--' + this.name"
  ></div>
</template>

<style   scoped>
</style>