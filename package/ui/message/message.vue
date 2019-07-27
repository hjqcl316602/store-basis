<script>
import { message } from "../config";
export default {
  name: "vui-message",
  data() {
    return {
      visible: false
    };
  },
  props: {
    message: {
      type: String,
      default: message.message
    },
    zIndex: {
      type: Number,
      default: message.zIndex
    },
    type: {
      validator(value) {
        return ["warning", "danger", "success", "primary", "default"].includes(
          value
        );
      },
      default: message.type
    }
  },
  computed: {
    messageStyle() {
      return {
        zIndex: this.zIndex
      };
    },
    messageClassName() {
      let className = [];
      className.push("vui-message");
      className.push("vui-message--" + this.type);
      this.visible && className.push("vui-message--active");
      return className;
    }
  },
  methods: {
    changeVisible(status) {
      this.visible = status;
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>

<template>
  <div class="vui-message" :class="messageClassName" :style="messageStyle">
    <span>{{ message }}</span>
  </div>
</template>

<style   scoped>
</style>