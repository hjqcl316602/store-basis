<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 11:47:30
 * @LastEditTime: 2019-08-18 20:51:22
 * @LastEditors: Please set LastEditors
 -->
<script>
import elementResizeDetectorMaker from "element-resize-detector";
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {
    height: 100
  };
};
instance.methods = {
  change() {
    this.height += 10;
  }
};
instance.created = function() {};
instance.mounted = function() {};
export default instance;
</script>

<template>
  <div class="">
    <router-view />
  </div>
</template>

<style   scoped>
</style>