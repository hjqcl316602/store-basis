<!--
 * @Description: 波浪型 - loading
 * @Author: your name
 * @Date: 2019-07-19 15:19:55
 * @LastEditTime: 2019-07-19 22:47:07
 * @LastEditors: Please set LastEditors
 -->
 <script>
import { loading } from "../config/index";
export default {
  name: "vui-loading-wave",
  props: {
    color: {
      type: String,
      default: loading.wave.color
    },
    size: {
      type: Number,
      default: loading.wave.size
    },
    scale: {
      type: Number,
      default: loading.wave.scale
    },
    spacing: {
      type: Number,
      default: loading.wave.spacing
    },
    alignType: {
      type: String,
      default: loading.wave.alignType
    },
    directionType: {
      type: String,
      default: loading.wave.directionType
    }
  },
  data() {
    return {};
  },
  computed: {
    loadingStyle() {
      let style = {};
      if (this.directionType === "horizontal") {
        style["width"] = this.size * 5 + this.spacing * 4 + "px";
        style["height"] = this.size * this.scale + "px";
      } else {
        style["height"] = this.size * 5 + this.spacing * 4 + "px";
        style["width"] = this.size * this.scale + "px";
      }

      return style;
    },
    loadingClassName() {
      let className = [];
      if (this.directionType) {
        className.push("vui-loading-wave--" + this.directionType);
      }
      if (this.alignType) {
        className.push("vui-loading-wave--" + this.alignType);
      }
      return className;
    },
    itemStyle() {
      let style = {};
      style["background-color"] = this.color;
      if (this.directionType === "horizontal") {
        style["height"] = this.size * this.scale + "px";
        style["width"] = this.size + "px";
      } else {
        style["width"] = this.size * this.scale + "px";
        style["height"] = this.size + "px";
      }
      return style;
    }
  }
};
</script>
 
 <template>
  <div class="vui-loading-wave" :class="loadingClassName" :style="loadingStyle">
    <div class="vui-loading-wave--item" :style="itemStyle"></div>
    <div class="vui-loading-wave--item" :style="itemStyle"></div>
    <div class="vui-loading-wave--item" :style="itemStyle"></div>
    <div class="vui-loading-wave--item" :style="itemStyle"></div>
    <div class="vui-loading-wave--item" :style="itemStyle"></div>
  </div>
</template>
 
 <style   scoped>
</style>
