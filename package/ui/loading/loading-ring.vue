<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-02 16:36:38
 * @LastEditTime: 2019-08-09 22:13:41
 * @LastEditors: Please set LastEditors
 -->
<script>
import { loading } from "../config";
import { addRule } from "../utils/dom";

const instance = {};
instance.name = "vui-loading-ring";
instance.props = {
  layerColor: {
    type: String,
    default: loading.ring.layerColor
  },
  layerSize: {
    type: Number,
    default: loading.ring.layerSize
  },
  size: {
    type: Number,
    default: loading.ring.size
  },
  color: {
    type: String,
    default: loading.ring.color
  },
  duration: {
    type: Number,
    default: loading.ring.duration
  }
};
instance.data = function() {
  return {};
};
instance.methods = {
  setStyle() {
    this.$nextTick(() => {
      addRule(
        ".vui-loading-ring",
        {
          width: this.size + "px",
          height: this.size + "px"
        },
        "loading-ring"
      );
      addRule(
        ".vui-loading-ring:before",
        {
          borderColor: this.layerColor,
          borderWidth: this.layerSize + "px"
        },
        "loading-ring"
      );
      addRule(
        ".vui-loading-ring:after",
        {
          borderWidth: this.layerSize + "px",
          borderTopColor: this.color,
          animationDuration: this.duration + "ms"
        },
        "loading-ring"
      );
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
  <div class="vui-loading-ring">
    <!-- <div class="vui-loading-ring__layer"></div>
    <div class="vui-loading-ring__aim" ></div> -->
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>