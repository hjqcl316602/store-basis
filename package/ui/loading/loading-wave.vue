<!--
 * @Description: 波浪型 - loading
 * @Author: your name
 * @Date: 2019-07-19 15:19:55
 * @LastEditTime: 2019-07-23 16:55:41
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
    itemNumber: {
      type: Number,
      default: loading.wave.itemNumber
    },
    spacing: {
      type: Number,
      default: loading.wave.spacing
    },
    align: {
      type: String,
      default: loading.wave.align
    },
    direction: {
      type: String,
      default: loading.wave.direction
    },
    duration: {
      type: Number,
      default: loading.wave.duration
    }
  },
  data() {
    return {};
  },
  computed: {
    waveStyle() {
      let style = {};
      style["height"] = this.size + "px";
      style["width"] = this.size + "px";
      return style;
    },
    waveClassName() {
      let className = [];
      if (this.direction) {
        className.push("vui-loading-wave--" + this.direction);
      }
      if (this.align) {
        className.push("vui-loading-wave--" + this.align);
      }
      return className;
    }
  },
  methods: {
    itemStyle(n) {
      let style = {};
      style["background-color"] = this.color;
      if (this.direction === "vertical") {
        style["height"] =
          (this.size - this.spacing * (this.itemNumber - 1)) / this.itemNumber +
          "px";
        style["width"] = this.size + "px";
      } else {
        style["width"] =
          (this.size - this.spacing * (this.itemNumber - 1)) / this.itemNumber +
          "px";
        style["height"] = this.size + "px";
      }
      style["animation-duration"] = this.duration + "ms";
      style["animation-delay"] =
        -(this.duration - (this.duration / 2 / this.itemNumber) * (n + 1)) +
        "ms";
      return style;
    }
  }
};
</script>
 
 <template>
  <div class="vui-loading-wave" :style="waveStyle" :class="waveClassName">
    <div class="vui-loading-wave__wrap">
      <div
        class="vui-loading-wave__item"
        v-for="(item, index) in itemNumber"
        :style="itemStyle(index)"
        :key="index"
      ></div>
    </div>
  </div>
</template>
 
 <style   scoped>
</style>
