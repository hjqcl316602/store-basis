<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-19 09:53:43
 * @LastEditTime: 2019-09-03 21:36:03
 * @LastEditors: Please set LastEditors
 -->
<script>
const image = {
  src: "", // 图片地址
  lazy: true, //是否懒加载
  lazyThreshold: 40, // 懒加载阈值，即image的顶部距离窗口的底部的差值
  lazyDuration: 1000, // 懒加载图片定时器的时差
  fillType: "width", //填充方式  width（宽度100%） height（高度100%） min（至少一边100%） max（至多一边100%） cover（两边100%）
  alignType: "center", // 对齐方式center top bottom left right top-left top-right bottom-left bottom-right
  width: "", // 图片宽
  height: "" // 图片高
};
export default {
  name: "vui-image",
  props: {
    src: String,
    lazy: {
      type: Boolean,
      default: image.lazy
    },
    lazyThreshold: {
      type: Number,
      default: image.lazyThreshold
    },
    lazyDuration: {
      type: Number,
      default: image.lazyDuration
    },
    fillType: {
      type: String,
      default: image.fillType
    },
    alignType: {
      type: String,
      default: image.alignType
    },
    width: String,
    height: String
  },
  data() {
    return {
      status: "loading"
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (this.lazy) {
        this.setLazyInterval();
      } else {
        this.loadImage();
      }
    });
  },
  methods: {
    setLazyInterval() {
      this.lazyImage();
      this._timer = setInterval(() => {
        if (this.status !== "loading") {
          this.clearLazyInterval();
        } else {
          this.lazyImage();
        }
      }, this.lazyDuration);
    },
    clearLazyInterval() {
      clearInterval(this._timer);
    },
    lazyImage() {
      let winHeight = window.innerHeight;
      let imageTop = this.$el && this.$el.getBoundingClientRect()["top"];
      if (winHeight - imageTop > this.lazyThreshold) {
        this.loadImage();
      }
    },
    loadImage() {
      //ie 火狐等大众浏览器均支持 Image对象的 onload事件。
      //ie8及以下、opera 不支持onerror事件
      return new Promise((resolve, reject) => {
        let image = new Image();
        image.src = this.src;
        image.onload = () => {
          this.status = "loaded";
          this.$el.style["background-image"] = `url(${this.src})`;
          resolve();
        };
        image.onerror = () => {
          this.status = "error";
          //this.$el.style["background-image"] = `url(${this.srcError})`;
          reject();
        };
      });
    }
  },
  computed: {
    styles() {
      let style = {};
      let className = [];
      if (this.fillType) {
        className.push("vui-image--" + this.fillType);
      }
      if (this.alignType) {
        className.push("vui-image--" + this.alignType);
      }
      style["width"] = this.width;
      style["height"] = this.height;
      return { style, className };
    }
  },
  beforeDestroy() {
    this.clearLazyInterval();
  }
};
</script>

<template>
  <div class="vui-image" :class="styles.className" :style="styles.style">
    <div class="vui-image--loading" v-if="status === 'loading'">
      <slot name="loading"> </slot>
    </div>

    <div class="vui-image--error" v-if="status === 'error'">
      <slot name="error"> </slot>
    </div>
    <div class="vui-image--inner">
      <slot></slot>
    </div>
  </div>
</template>

<style   scoped>
</style>
 
