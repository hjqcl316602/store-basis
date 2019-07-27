<script>
import { tag } from "../config/index";
export default {
  name: "vui-tag",
  data() {
    return {};
  },
  props: {
    label: {
      type: String,
      default: tag.label
    },
    direction: {
      validator(value) {
        return [
          "top-right",
          "top-left",
          "bottom-right",
          "bottom-left",
          "top-center",
          "bottom-center",
          "left-center",
          "right-center"
        ].includes(value);
      },
      default: tag.direction
    }
  },
  computed: {
    labelStyle() {
      let style = {};
    }
  },
  mounted() {}
};
</script>

<template>
  <div class="vui-tag">
    <slot></slot>
    <div class="vui-tag__label" :class="'vui-tag--' + this.direction">
      <slot name="label">
        <div class="vui-tag__message">
          <span> {{ label }}</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<style   scoped>
</style>