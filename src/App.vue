<template>
  <div id="app">
    <div class="vui-padding--larger " style="background-color: #dedede">
      <div class="">
        <vui-image
          :src="require('./image/zly.jpg')"
          width="100%"
          height="100px"
        ></vui-image>
        <div>
          <vui-upload @change="change"> </vui-upload>
        </div>
        <div>
          <vui-tag label="黄军泉" direction="top-right">
            <div>
              dsdjsdhjsd
            </div>
             <vui-ratio :ratio="1"></vui-ratio>
          </vui-tag>
        </div>
        <div>
          <vui-icon
            name="spread-right"
            class="vui-color--danger vui-font-size--large"
          ></vui-icon>
          <vui-icon name="top-circle" :size="14"></vui-icon>
          <vui-icon name="top-circle-solid" :size="14"></vui-icon>
          <vui-icon name="loading2" :size="14"></vui-icon>
          <vui-icon color="red"></vui-icon>
        </div>
      </div>
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
  Upload,
  Tag,
  Icon,
  Ratio,
  Accordion
} from "../package/ui/index.js";
Vue.use(Image)
  .use(Upload)
  .use(Tag)
  .use(Icon)
  .use(Ratio)
  .use(Accordion)
  .use(Accordion.Item);
export default {
  data() {
    return {
      active: "1"
    };
  },
  components: {},
  name: "App",
  mounted() {},
  methods: {
    change(e) {
      console.log(this.active);
    }
  },
  computed: {
    layerStyle() {
      //let offset = (PERIMETER * (100 - this.value)) / 100;
      //offset = this.clockwise ? offset : PERIMETER * 2 - offset;
      return {
        fill: "none",
        stroke: "red",
        strokeDashoffset: `100px`,
        strokeWidth: `40px`
      };
    },

    hoverStyle() {
      return {
        fill: "none",
        stroke: "blue",
        strokeWidth: "1px"
      };
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
.svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.svg-inner {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-transform-origin: 530px 530px;
  transform-origin: 530px 530px;
  fill: none;
  stroke-linecap: round;
  stroke-dasharray: 3140;
  stroke-dashoffset: 3140;
}
.main {
  position: relative;
  width: 450px;
  height: 450px;
}
.pure_top {
  width: 0;
  height: 0;
  border-left: 100px solid red;
  border-top: 100px solid blue;
  border-right: 100px solid green;
  border-bottom: 50px solid yellow;
  border-radius: 30px;
}
</style>



