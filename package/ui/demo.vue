<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 21:29:46
 * @LastEditTime: 2019-08-11 09:47:17
 * @LastEditors: Please set LastEditors
 -->
<script>
import Vue from "vue";
import { Border, Icon } from "./index";
import routes from "../../src/router/routes";
Vue.use(Border).use(Icon);
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {};
};
instance.methods = {
  changeRoute(item) {
    this.$router.push({ name: item.name });
  }
};
instance.created = function() {};
instance.mounted = function() {};
instance.computed = {
  routes() {
    return routes.filter(ele => {
      return ele["meta"] && !ele["meta"]["hide"];
    });
  }
};
export default instance;
</script>

<template>
  <div class="">
    <vui-border
      bottom
      color="#aaa"
      :size="1 / 3"
      v-for="(item, index) in routes"
      :key="index"
    >
      <div
        class="hj-padding--large hj-flex hj-align-items--center"
        @click="changeRoute(item)"
      >
        <span class="hj-flex--1 hj-font-size--medium"
          >{{ item["meta"]["title"] }} ({{ item["meta"]["en"] }})
        </span>
        <span class="hj-flex--0">
          <vui-icon name="right" color="#aaa"></vui-icon>
        </span>
      </div>
    </vui-border>
  </div>
</template>

<style   scoped>
</style>