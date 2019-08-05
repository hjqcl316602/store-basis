<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede"></div>
    <div>
      <vui-radio v-model="index" type="vartical">
        <vui-radio-item label="111" label-type="prev"> </vui-radio-item>
        <vui-radio-item label="222" label-type="prev"> </vui-radio-item>
        <vui-radio-item label="333" label-type="prev"> </vui-radio-item>
        <vui-radio-item label="444" label-type="prev"> </vui-radio-item>
        <vui-radio-item label="555" label-type="prev" disabled>
        </vui-radio-item>
      </vui-radio>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { Radio } from "../package/ui/index.js";
import "../package/ui/style/index.less";
Vue.use(Radio).use(Radio.Item);
export default {
  data() {
    return {
      active: true,
      index: 4
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
    change() {
      this.index = 1;
    }
  },
  computed: {},
  watch: {
    index(val) {
      console.log(val);
    }
  }
};
</script>

<style>
</style>



