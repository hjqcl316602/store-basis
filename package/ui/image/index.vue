<script>
import { image } from "../config/index";
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
    width: {
      type: String,
      default: image.width
    },
    height: {
      type: String,
      default: image.height
    }
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
    imageStyle() {
      let style = {};
      style["width"] = this.width;
      style["height"] = this.height;
      return style;
    },
    imageClassName() {
      let className = [];
      if (this.fillType) {
        className.push("vui-image--" + this.fillType);
      }
      if (this.alignType) {
        className.push("vui-image--" + this.alignType);
      }
      return className;
    }
  },
  beforeDestroy() {
    this.clearLazyInterval();
  }
};
</script>

<template>
  <div class="vui-image" :class="imageClassName" :style="imageStyle">
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
  <!-- 使用方式
    <vui-image
        :lazy="true"
        fill-type="cover"
        align-type="center"
        src="http://img4.duitang.com/uploads/item/201511/26/20151126170245_JEKch.jpe"
      >
        <vui-loading-circle slot="loading"></vui-loading-circle>
        <div slot="error">错了</div> 
        <div @click="change">
          <div>dshjdshj</div>
          <div>sdsdhdskdjks打开手机框架的</div> 
        </div>
      </vui-image>
      -->
</template>

<style   scoped>
</style>
 
