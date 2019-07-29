<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede">
      <vui-upload></vui-upload>
      <vui-input align="center"> </vui-input>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import {
  Loading,
  Input,
  Image,
  Tag,
  Ratio,
  Message,
  Upload
} from "../package/ui/index.js";
import "../package/ui/style/index.less";
Vue.use(Loading)
  .use(Message)
  .use(Upload)
  .use(Input);
export default {
  data() {
    return {
      active: "1"
    };
  },
  components: {},
  name: "App",
  mounted() {
    // this.$loading.show("dsadsjds");
    // setTimeout(() => {
    //   this.$loading.clear();
    // }, 3000);
    //this.$message("dsds", 40000);
  },
  methods: {
    change(e) {
      console.log(this.active);
    }
  },
  computed: {},
  watch: {}
};
</script>

<style>
</style>



