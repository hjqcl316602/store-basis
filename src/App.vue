<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede"></div>
    <div style="">
      <vui-carousel :size="20" v-model="index">
        <vui-carousel-item>
          <div>
            <div>萨克健身卡技术阿克苏建安看时间啊就看手机卡</div>
          </div>
        </vui-carousel-item>
        <vui-carousel-item>
          <div>
            <div>萨克健身卡技术阿克苏建安看时间啊就看手机卡</div>
          </div>
        </vui-carousel-item>
        <vui-carousel-item>
          <div>
            <div>萨克健身卡技术阿克苏建安看时间啊就看手机卡</div>
          </div>
        </vui-carousel-item>
        <div slot="bar">
          <vui-carsousel-bar v-model="index" :bar-len="3"></vui-carsousel-bar>
        </div>
      </vui-carousel>
      <button @click="change">chang</button>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import { Carousel } from "../package/ui/index.js";
import "../package/ui/style/index.less";
Vue.use(Carousel)
  .use(Carousel.Item)
  .use(Carousel.Bar);
export default {
  data() {
    return {
      active: true,
      index: 2
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



