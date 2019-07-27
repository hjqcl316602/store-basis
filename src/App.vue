<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede"></div>
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
Vue.use(Message);
export default {
  data() {
    return {
      active: "1"
    };
  },
  components: {},
  name: "App",
  mounted() {
    this.$message.danger("dsadsjds", 3000);
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



