<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede"></div>

    <div>
      <vui-border top bottom left right :size="0.5">
        <div style="height:50px"></div>
      </vui-border>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { Radio, Icon, Check, Border } from "../package/ui/index.js";
import "../package/ui/style/index.less";
Vue.use(Radio)
  .use(Radio.Group)
  .use(Icon)
  .use(Check)
  .use(Check.Group)
  .use(Border);
export default {
  data() {
    return {
      active: true,
      index: "2",
      check: false,
      checkes: ["1", "2"]
    };
  },
  components: {},
  name: "App",
  mounted() {
    // this.$loading.show("dsadsjds");
    setTimeout(() => {
      this.active = true;
    }, 2000);
    // setTimeout(() => {
    //   this.active = true;
    // }, 4000);
    //this.$message("dsds", 40000);
  },
  methods: {
    change(val) {
      console.log(val);
    }
  },
  computed: {},
  watch: {
    index(val) {
      //console.log(val);
    }
  }
};
</script>

<style>
</style>



