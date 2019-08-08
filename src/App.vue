<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede"></div>
    <div>
      <vui-radio-group v-model="index" @change="change">
        <vui-radio name="1">
          <div>
            <span>1</span>
          </div>
        </vui-radio>
        <vui-radio name="2">
          <div>
            <span>2</span>
          </div>
        </vui-radio>
        <vui-radio name="3">
          <div>
            <span>3</span>
          </div>
        </vui-radio>
      </vui-radio-group>
      <vui-radio v-model="radio" @change="change">
        <div>{{ radio }}</div>
      </vui-radio>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { Radio, Icon, Check } from "../package/ui/index.js";
import "../package/ui/style/index.less";
Vue.use(Radio)
  .use(Radio.Group)
  .use(Icon)
  .use(Check)
  .use(Check.Group);
export default {
  data() {
    return {
      active: true,
      index: "2",
      radio: false,
      indexes: ["1", "2", "3"]
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



