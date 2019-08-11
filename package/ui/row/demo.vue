<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 09:31:28
 * @LastEditTime: 2019-08-11 11:30:20
 * @LastEditors: Please set LastEditors
 -->
<script>
import Vue from "vue";
import ui from "./index";
Vue.use(ui).use(ui.Span);
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
    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">栅格化</div>
      <vui-row justify="flex-start">
        <vui-span :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:orange"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">栅格化</div>
      <vui-row justify="flex-start">
        <vui-span :span="8">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="8">
          <div style="height:40px;background-color:red"></div>
        </vui-span>
        <vui-span :span="8">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">水平间距</div>
      <vui-row justify="flex-start" :gutter="20">
        <vui-span :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:orange"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">水平垂直间距</div>
      <vui-row justify="flex-start" :gutter="20" :gutter-ver="20">
        <vui-span :span="12">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="12">
          <div style="height:40px;background-color:red"></div>
        </vui-span>
        <vui-span :span="12">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
        <vui-span :span="12">
          <div style="height:40px;background-color:orange"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">右移动</div>
      <vui-row justify="flex-start">
        <vui-span :span="6" :push="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">左移动</div>
      <vui-row justify="flex-start">
        <vui-span :span="6" :pull="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">右对齐</div>
      <vui-row justify="flex-end">
        <vui-span :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">水平居中</div>
      <vui-row justify="center">
        <vui-span :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">两边对齐</div>
      <vui-row justify="space-between">
        <vui-span :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">垂直居中</div>
      <vui-row justify="space-between" items="center">
        <vui-span :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:80px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">顶部对齐</div>
      <vui-row justify="space-between" items="flex-start">
        <vui-span :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:80px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">底部对齐</div>
      <vui-row justify="space-between" items="flex-end">
        <vui-span :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:80px;background-color:red"></div>
        </vui-span>
        <vui-span :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-span>
      </vui-row>
    </div>

    <div class="hj-margin-bottom--large">
      <div class="hj-margin-bottom">左边固定，右边自动</div>
      <vui-row>
        <vui-span width="100px">
          <div style="height:40px;background-color:blue"></div>
        </vui-span>
        <vui-span auto>
          <div style="height:40px;background-color:red"></div>
        </vui-span>
      </vui-row>
    </div>
  </div>
</template>

<style   scoped>
</style>