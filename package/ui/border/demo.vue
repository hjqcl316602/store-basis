<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 22:42:23
 * @LastEditTime: 2019-08-18 22:07:47
 * @LastEditors: Please set LastEditors
 -->
<script>
import Vue from "vue";
import ui from "./index";
Vue.use(ui);
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {};
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
export default instance;
</script>

<template>
  <div class="hj-padding--large">
    <div class="hj-margin-bottom">
      <vui-border top>
        <div class="hj-padding">上边框(top)</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border bottom>
        <div class="hj-padding">下边框(bottom)</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border left>
        <div class="hj-padding">左边框(left)</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border right>
        <div class="hj-padding">右边框(right)</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border round>
        <div class="hj-padding">四周(round)</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border round color="red">
        <div class="hj-padding">红色(color="red")</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border round color="red" :size="1 / 2">
        <div class="hj-padding">二分之一像素(:size="1/2")</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border round color="red" :size="1 / 3">
        <div class="hj-padding">三分之一像素(:size="1/3")</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border round color="red" :size="1 / 3" type="dashed">
        <div class="hj-padding">样式（type="dashed"）</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border round color="red" :size="1 / 3" radius="4px">
        <div class="hj-padding">圆角(radius="4px")</div>
      </vui-border>
    </div>
    <div class="hj-margin-bottom">
      <vui-border round color="red" :size="1 / 3" circle>
        <div class="hj-padding">全圆角(circle)</div>
      </vui-border>
    </div>
  </div>
</template>

<style   scoped>
</style>