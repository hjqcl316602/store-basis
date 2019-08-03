<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede"></div>
    <div style="">
      <vui-carousel :size="20">
        <vui-carousel-item>
          <div style="background-color:yellow;height:400px">
            <div>萨克健身卡技术阿克苏建安看时间啊就看手机卡</div>
            <div>萨克健身卡技术阿克苏建安看时间啊就看手机卡</div>
          </div>
        </vui-carousel-item>
        <vui-carousel-item>
          <div style="background-color:red;height:400px">
            <div>萨克健身卡技术阿克苏建安看时间啊就看手机卡</div>
            <div>dsjdkjsk就的撒框架的看时间的啥看时间肯定就是</div>
          </div>
        </vui-carousel-item>
        <vui-carousel-item>
          <div style="background-color:blue;height:400px">
            <div>萨克健身卡技术阿克苏建安看时间啊就看手机卡</div>
            <div>dsjdkjsk就的撒框架的看时间的啥看时间肯定就是</div>
            <div>dsjdkjsk就的撒框架的看时间的啥看时间肯定就是</div>
          </div>
        </vui-carousel-item>
      </vui-carousel>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { Carousel } from "../package/ui/index.js";
import "../package/ui/style/index.less";
Vue.use(Carousel).use(Carousel.Item);
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



