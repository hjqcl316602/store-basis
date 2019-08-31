<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 09:37:45
 * @LastEditTime: 2019-08-31 10:10:13
 * @LastEditors: Please set LastEditors
 -->
<script>
const config = {
  type: "top", // ['top','bottom','left','right']
  padding: false, // 是否需要设置body的padding值
  zIndex: 99
};
const instance = {};
instance.name = "vui-floater";
instance.props = {
  type: {
    type: String,
    default: config.type
  },
  padding: {
    type: Boolean,
    default: config.padding
  },
  zIndex: {
    type: [Number, String],
    default: config.zIndex
  }
};
instance.data = function() {
  return {};
};
instance.methods = {
  setPadding() {
    if (this.padding) {
      if (this.type === "top" || this.type === "bottom") {
        this.setBody(this.$el.offsetHeight);
      } else {
        this.setBody(this.$el.offsetWidth);
      }
    }
  },
  setBody(value) {
    document.body.style["padding-" + this.type] = value + "px";
  }
};
instance.created = function() {};
instance.mounted = function() {
  this.$nextTick(() => {
    this.setPadding();
  });
};
instance.updated = function() {
  this.$nextTick(() => {
    this.setPadding();
  });
};
instance.beforeDestroy = function() {
  this.setBody(0);
};
instance.computed = {
  styles() {
    let className = ["vui-floater"];
    let style = {};
    if (this.type) {
      className.push("vui-floater--" + this.type);
    }
    if (this.zIndex) {
      style["zIndex"] = this.zIndex;
    }
    return { className, style };
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