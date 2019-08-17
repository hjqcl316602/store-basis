<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 11:47:30
 * @LastEditTime: 2019-08-16 11:41:38
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
  let url =
    "https://ds.alipay.com/?from=mobilecodec&scheme=alipays%3A%2F%2Fplatformapi%2Fstartapp%3FappId%3D20000200%26actionType%3DtoAccount%26account%3D13980464237%26amount%3D20%26userId%3D2088802680692010";
  console.log(decodeURIComponent(url));
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
  let d =
    "https://ds.alipay.com/?from=mobilecodec&scheme=" +
    encodeURIComponent(
      "alipays://platformapi/startapp?appId=20000200&actionType=toAccount&account=13980464237&amount=20&userId=2088802680692010"
    );
  console.log(d);
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