<!--
 * @Description: In User Settings Edit
 * @Author: huangjunquan
 * @Date: 2019-08-10 08:49:20
 * @LastEditTime: 2019-08-28 15:25:35
 * @LastEditors: Please set LastEditors
 -->
<script>
import Vue from "vue";
import ui from "./index";
import styler from "../../es/domer/styler";
import check from "../../es/stringer/check";
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
    let rules = styler.getRules(function(text) {
      return check.start(text, ".vui-icon");
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
  <div class="vui-padding--large">
    <div class="vui-row--flex vui-row-gutter--large">
      <div class="  vui-span--8" v-for="(item, index) in iconList" :key="index">
        <div
          class="vui-padding-top--larger vui-padding-bottom--larger vui-text-align--center vui-flex vui-flex-direction--column vui-align-items--center"
        >
          <vui-icon :name="item" size="24px"></vui-icon>
          <span class="vui-margin-top">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style   scoped>
</style>