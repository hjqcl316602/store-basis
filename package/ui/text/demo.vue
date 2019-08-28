<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 17:50:15
 * @LastEditTime: 2019-08-28 18:46:46
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
  <div class="vui-padding--large">
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">default|long</div>
      <div>
        <vui-text>
          default
        </vui-text>
      </div>
      <div>
        <vui-text long>
          long
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">size</div>
      <div>
        <vui-text size="smaller">
          smaller
        </vui-text>
        <vui-text size="small">
          small
        </vui-text>
        <vui-text size="medium">
          medium
        </vui-text>
        <vui-text size="large">
          large
        </vui-text>
        <vui-text size="larger">
          larger
        </vui-text>
        <vui-text size="26px">
          自定义（26px）
        </vui-text>
      </div>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">color</div>
      <div>
        <vui-text>
          default
        </vui-text>
        <vui-text color="primary">
          primary
        </vui-text>
        <vui-text color="danger">
          danger
        </vui-text>
        <vui-text color="warning">
          warning
        </vui-text>
        <vui-text color="success">
          success
        </vui-text>
        <vui-text color="black">
          black
        </vui-text>
        <vui-text color="dark">
          dark
        </vui-text>
        <vui-text color="light">
          light
        </vui-text>
        <vui-text color="gray">
          gray
        </vui-text>
        <vui-text color="white">
          white
        </vui-text>
        <vui-text color="#020271">
          自定义（#020271）
        </vui-text>
      </div>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">bold</div>
      <div>
        <vui-text bold>
          bold
        </vui-text>
      </div>
    </div>
  </div>
</template>

<style   scoped>
</style>