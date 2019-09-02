<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 09:37:36
 * @LastEditTime: 2019-09-02 23:13:38
 * @LastEditors: Please set LastEditors
 -->
<script>
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {
    top: false,
    bottom: false,
    left: false,
    right: false
  };
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
export default instance;
</script>

<template>
  <div class="vui-padding--large">
    <vui-floater type="top" v-if="top" padding>
      <div class="vui-padding" style="background-color:#fff">
        top
      </div>
    </vui-floater>

    <vui-floater type="bottom" v-if="bottom" padding>
      <div class="vui-padding" style="background-color:#fff">
        bottom
      </div>
    </vui-floater>
    <vui-floater type="left" v-if="left" padding>
      <div class="vui-padding" style="background-color:#fff;height:100%">
        left
      </div>
    </vui-floater>
    <vui-floater type="right" v-if="right" padding z-index="100">
      <div class="vui-padding" style="background-color:#fff;height:100%">
        right
      </div>
    </vui-floater>
    <vui-button pack color="primary" @click="top = !top">头部</vui-button>
    <vui-button pack color="primary" @click="bottom = !bottom">底部</vui-button>
    <vui-button pack color="primary" @click="left = !left">左</vui-button>
    <vui-button pack color="primary" @click="right = !right">右</vui-button>
  </div>
</template>

<style   scoped>
</style>