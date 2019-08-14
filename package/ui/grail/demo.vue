<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 10:13:01
 * @LastEditTime: 2019-08-14 14:40:29
 * @LastEditors: Please set LastEditors
 -->
<script>
import Vue from "vue";
import Grail from "./index";

Vue.use(Grail).use(Grail.Child);
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {
    text:
      "颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间"
  };
};
instance.methods = {
  change() {
    this.text +=
      "颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间";
  }
};
instance.created = function() {};
instance.mounted = function() {};
export default instance;
</script>

<template>
  <div class="hj-padding--large">
    <vui-grail>
      <div>
        颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间
      </div>
      <vui-grail-child type="bottom">
        <div style="">
          <div @click="change">
            {{ text }}
          </div>
        </div>
      </vui-grail-child>
    </vui-grail>
  </div>
</template>

<style   scoped>
</style>