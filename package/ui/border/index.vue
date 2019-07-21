<!--
 * @Description: 解决手机端的半像素，以及border-radius
 * @Author: your name
 * @Date: 2019-07-19 22:06:51
 * @LastEditTime: 2019-07-19 22:51:57
 * @LastEditors: Please set LastEditors
 -->
<script>
export default {
  name: "vui-border",
  data() {
    return {};
  }
};
</script>

<template>
  <div class="vui-border__wrap">
    <div class="vui-border__inner"><slot></slot></div>
    <div class="vui-border"></div>
  </div>
</template>

<style   scoped>
</style>