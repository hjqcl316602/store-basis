<template>
  <div id="app">
    <div class="  vui-padding--larger"></div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";

import { Loading, Input, Image } from "../package/ui/index.js";

export default {
  data() {
    return {
      money: ""
    };
  },
  components: {},
  name: "App",
  mounted() {},
  methods: {
    change(e) {
      console.log(e);
    }
  },
  watch: {
    money(val) {
      //console.log(val);
    }
  }
};
</script>

<style>
</style>



