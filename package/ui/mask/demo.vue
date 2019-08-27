<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 11:24:26
 * @LastEditTime: 2019-08-27 18:29:11
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
  return {
    show: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false
  };
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
export default instance;
</script>

<template>
  <div class="" style="height:1000px">
    <button @click="show = !show">fade</button>
    <button @click="show1 = !show1">slide-right</button>
    <button @click="show2 = !show2">slide-left</button>
    <button @click="show3 = !show3">slide-top</button>
    <button @click="show4 = !show4">slide-bottom</button>
    <vui-mask v-model="show" transitionName="fade"> </vui-mask>
    <vui-mask v-model="show1" transitionName="slide-right"> </vui-mask>
    <vui-mask v-model="show2" transitionName="slide-left"> </vui-mask>
    <vui-mask v-model="show3" transitionName="slide-top"> </vui-mask>
    <vui-mask v-model="show4" transitionName="slide-bottom"> </vui-mask>
  </div>
</template>

<style   scoped>
</style>