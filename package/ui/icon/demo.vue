<!--
 * @Description: In User Settings Edit
 * @Author: huangjunquan
 * @Date: 2019-08-10 08:49:20
 * @LastEditTime: 2019-08-11 09:45:14
 * @LastEditors: Please set LastEditors
 -->
<script>
import Vue from "vue";
import ui from "./index";
import { getClassRules } from "../utils/dom";
import { isStart } from "../utils/string";
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
instance.computed = {
  iconList() {
    let res = [];
    let rules = getClassRules(function(text) {
      return isStart(text, ".vui-icon");
    });
    rules.forEach(rule => {
      let regex = /^\.vui-icon--(.*?)\:\:before$/;
      rule.replace(regex, function(a, b, c) {
        res.push(b);
      });
    });
    return res;
  }
};
export default instance;
</script>

<template>
  <div class="hj-padding--large">
    <div class="hj-row--flex hj-row-gutter--large">
      <div class="  hj-span--8" v-for="(item, index) in iconList" :key="index">
        <div
          class="hj-padding-top--larger hj-padding-bottom--larger hj-text-align--center hj-flex hj-flex-direction--column hj-align-items--center"
        >
          <vui-icon :name="item" size="24px"></vui-icon>
          <span class="hj-margin-top">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style   scoped>
</style>