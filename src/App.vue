<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede">
      <vui-upload></vui-upload>
      <vui-input align="center"> </vui-input>

      <vui-confirm v-model="active"></vui-confirm>
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
  Upload,
  Confirm,
  Mask
} from "../package/ui/index.js";
import "../package/ui/style/index.less";
Vue.use(Loading)
  .use(Message)
  .use(Upload)
  .use(Input)
  .use(Confirm)
  .use(Mask);
export default {
  data() {
    return {
      active: true
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



