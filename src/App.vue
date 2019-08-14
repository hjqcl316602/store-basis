<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 11:47:30
 * @LastEditTime: 2019-08-14 10:00:47
 * @LastEditors: Please set LastEditors
 -->
<script>
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {};
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {
  // function getBarWidth() {
  //   let div = document.createElement("div");
  //   let inner = document.createElement("div");
  //   let width = 100;
  //   inner.style.height = width * 1.5 + "px";
  //   div.appendChild(inner);
  //   div.style.width = width + "px";
  //   div.style.height = width + "px";
  //   div.style.overflow = "scroll";
  //   document.body.appendChild(div);
  //   return 100 - div.clientWidth;
  // }
  // console.log(getBarWidth());
};
export default instance;
</script>

<template>
  <div class="">
    <router-view />
  </div>
</template>

<style   scoped>
</style>