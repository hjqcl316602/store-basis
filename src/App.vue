<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede">
      <div @click="change" class="vui-margin-top--larger">click</div>
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
  Message
} from "../package/ui/index.js";
Vue.use(Loading).use(Message);
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
    this.$message("dsds", 40000);
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



