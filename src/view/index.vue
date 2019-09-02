<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 21:29:46
 * @LastEditTime: 2019-09-02 23:11:16
 * @LastEditors: Please set LastEditors
 -->
<script>
import routes from "../router/routes";
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
        class="vui-padding--large vui-flex vui-align-items--center"
        @click="changeRoute(item)"
      >
        <span class="vui-flex--1 vui-font-size--medium"
          >{{ item["meta"]["title"] }} ({{ item["meta"]["en"] }})
        </span>
        <span class="vui-flex--0">
          <vui-icon name="right" color="#aaa"></vui-icon>
        </span>
      </div>
    </vui-border>
    <vui-box padding-top="10px" padding-bottom=""> </vui-box>
  </div>
</template>

<style   scoped>
</style>