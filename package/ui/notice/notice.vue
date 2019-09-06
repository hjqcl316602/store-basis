<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 17:45:47
 * @LastEditTime: 2019-09-06 17:53:26
 * @LastEditors: Please set LastEditors
 -->
<script>
const config = {
  value: false
};
const instance = {};
instance.name = "vui-notice";
instance.props = {
  value: {
    type: Boolean,
    default: config.value
  }
};
instance.data = function() {
  return {};
};
instance.computed = {
  currentValue: {
    get() {
      return this.value;
    },
    set() {
      this.$emit("input");
    }
  }
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
instance.watch = {};
export default instance;
</script>

<template>
  <div class="vui-notice">
    通知
  </div>
</template>

<style   scoped>
</style>