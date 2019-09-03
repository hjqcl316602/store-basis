<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 21:29:46
 * @LastEditTime: 2019-09-03 18:12:28
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
    <vui-box background-color="white">
      <vui-border
        bottom
        color="#aaa"
        :size="1 / 3"
        v-for="(item, index) in routes"
        :key="index"
      >
        <vui-box padding="large">
          <div @click="changeRoute(item)">
            <vui-grid>
              <vui-grid-child flex-grow="1">
                <vui-text color="dark">
                  {{ item["meta"]["title"] }}
                </vui-text>
              </vui-grid-child>
              <vui-grid-child flex-grow="0">
                <vui-text color="light" size="smaller">
                  <vui-box type="inline-block" margin-right="medium">
                    <vui-text>
                      {{ item["meta"]["en"] }}
                    </vui-text>
                  </vui-box>
                  <vui-icon name="right"></vui-icon>
                </vui-text>
              </vui-grid-child>
            </vui-grid>
          </div>
        </vui-box>
      </vui-border>
    </vui-box>
  </div>
</template>

<style   scoped>
</style>