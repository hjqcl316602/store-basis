<!--
 * @Description: 盒子-用于处理一像素问题，包括border-radius，内部元素均需要放大同等倍数
 * @Author: your name
 * @Date: 2019-07-20 11:16:28
 * @LastEditTime: 2019-07-20 11:41:42
 * @LastEditors: Please set LastEditors
 -->
<script>
import { wrap } from "../config/index";
export default {
  name: "vui-wrap",
  props: {
    multiple: {
      type: Number,
      default: wrap.multiple
    }
  },
  data() {
    return {};
  },
  computed: {
    wrapStyle() {
      let style = {};
      style["width"] = 100 * this.multiple + "%";
      style["height"] = 100 * this.multiple + "%";
      style["transform"] = `scale(${1 / this.multiple})`;
      return style;
    }
  }
};
</script>

<template>
  <div class="vui-wrap" :style="wrapStyle">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>