<script>
import Vue from "vue";
import Mask from "../mask";
Vue.use(Mask);
const config = {
  value: false,
  closable: true, //是可点击遮罩层关闭
  animate: true, // 是否动画
  options: [],
  isCancel: true, // 是否取消按钮
  mask: true //是否需要遮罩层
};
export default {
  name: "vui-action",
  data() {
    return {};
  },
  props: {
    value: {
      type: Boolean,
      default: config.value
    },
    closable: {
      type: Boolean,
      default: config.closable
    },
    animate: {
      type: Boolean,
      default: config.animate
    },
    mask: {
      type: Boolean,
      default: config.mask
    },

    isCancel: {
      type: Boolean,
      default: config.isCancel
    },
    options: {
      type: Array,
      default: config.options
    }
  },
  computed: {
    currentValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    },

    styles() {
      let className = ["vui-action-wrap"];

      if (this.animate) {
        className.push("is-action--animate");
        if (this.value) {
          className.push("is-action--animate-active");
        }
      }
      return {
        className
      };
    }
  },
  methods: {
    handler() {
      this.closable && this.close();
    },
    close() {
      this.$emit("input", false);
    },
    select(item) {
      this.close();
      this.$emit("select", item);
    }
  },
  mounted() {}
};
</script>

<template>
  <div>
    <vui-mask v-model="currentValue" transitionName="fade" v-if="mask">
    </vui-mask>
    <div :class="styles.className" @click.self="handler">
      <div class="vui-action">
        <div
          class="vui-action-field vi-border is-border--top is-border--thiner"
          v-for="(item, index) in options"
          @click="select(item)"
        >
          <span>{{ item["text"] }}</span>
          <span v-if="item['subText']" class="is-action--subtext">
            {{ item["subText"] }}
          </span>
        </div>
        <div class="vui-action-cancel" @click="close" v-if="isCancel">
          <span>取消</span>
        </div>
      </div>
    </div>
  </div>
</template>
