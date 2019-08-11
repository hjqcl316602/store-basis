<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 09:01:39
 * @LastEditTime: 2019-08-11 09:44:47
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
    <div class="hj-margin-bottom--large" style="width:100px">
      <vui-ratio :ratio="0.5">
        <div class="hj-cover hj-center" style="background-color:#dedede">
          <span>1:2 </span>
        </div>
      </vui-ratio>
    </div>

    <div class="hj-margin-bottom--large" style="width:100px">
      <vui-ratio :ratio="1">
        <div class="hj-cover hj-center" style="background-color:#dedede">
          <span>1:1</span>
        </div>
      </vui-ratio>
    </div>

    <div class="hj-margin-bottom--large" style="width:100px">
      <vui-ratio :ratio="2">
        <div class="hj-cover hj-center" style="background-color:#dedede">
          <span>2:1</span>
        </div>
      </vui-ratio>
    </div>

    <div class="hj-margin-bottom--large" style="width:100px">
      <vui-ratio :ratio="16 / 9">
        <div class="hj-cover hj-center" style="background-color:#dedede">
          <span> 16:9 </span>
        </div>
      </vui-ratio>
    </div>
  </div>
</template>

<style   scoped>
</style>