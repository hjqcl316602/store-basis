<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede"></div>

    <div>
      <vui-tab-group v-model="active" @change="change">
        <vui-tab name="1">
          <div style="line-height:50px">电影{{ active === "1" }}</div>
        </vui-tab>
        <vui-tab name="2">
          <div style="line-height:50px">视频{{ active === "2" }}</div>
        </vui-tab>
        <vui-tab name="3">
          <div style="line-height:50px">军事{{ active === "3" }}</div>
        </vui-tab>
        <vui-tab name="4">
          <div style="line-height:50px">娱乐{{ active === "4" }}</div>
        </vui-tab>
        <vui-tab name="5">
          <div style="line-height:50px">科技{{ active === "5" }}</div>
        </vui-tab>
        <vui-tab name="6">
          <div style="line-height:50px">数码{{ active === "6" }}</div>
        </vui-tab>
      </vui-tab-group>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { Tab } from "../package/ui/index.js";
import "../package/ui/style/index.less";
Vue.use(Tab).use(Tab.Group);
export default {
  data() {
    return {
      active: "3"
    };
  },
  components: {},
  name: "App",
  mounted() {},
  methods: {
    change(val) {
      //console.log(val);
    }
  },
  computed: {},
  watch: {
    active(val) {
      //console.log(val);
    }
  }
};
</script>

<style>
</style>



