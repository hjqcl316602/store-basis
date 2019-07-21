<script>
import { input } from "../config/index";
export default {
  name: "vui-input",
  props: {
    prepend: {
      type: Boolean,
      default: input.prepend
    },
    prependWidth: {
      type: String,
      default: input.prependWidth
    },
    prependText: {
      type: String,
      default: input.prependText
    },
    prependTextAlign: {
      type: String,
      default: input.prependTextAlign
    },
    append: {
      type: Boolean,
      default: input.append
    },
    appendWidth: {
      type: String,
      default: input.appendWidth
    },
    border: {
      type: Boolean,
      default: input.border
    },
    placeholder: {
      type: String
    },
    type: {
      type: String
    },
    value: String
  },
  data() {
    return {
      isActive: false,
      currentValue: ""
    };
  },
  methods: {
    inputBlur(e) {
      this.isActive = false;
      this.$emit("blur", e);
    },
    inputFocus(e) {
      this.isActive = true;
      this.$emit("focus", e);
    },
    inputChange(e) {
      this.$emit("change", e);
    },
    inputEnter(e) {
      this.$emit("enter", e);
    },
    inputClick(e) {
      this.currentValue = "";
      this.$emit("click", e);
    }
  },
  watch: {
    value: {
      handler(val, olval) {
        this.currentValue = val;
      },
      deep: true,
      immediate: true
    },
    currentValue(val) {
      this.$emit("input", val);
    }
  },
  computed: {
    inputClassName() {
      let className = [];

      return className;
    },
    inputStyle() {
      let style = {};

      return style;
    }
  }
};
</script>

<template>
  <div class="vui-input" :class="inputClassName" :style="inputStyle">
    <div
      class="vui-input--prepend"
      :style="{ flexBasis: prependWidth, textAlign: prependTextAlign }"
      v-if="prepend"
    >
      <slot name="prepend">
        {{ prependText }}
      </slot>
    </div>

    <input
      :type="type"
      @blur="inputBlur"
      @focus="inputFocus"
      :placeholder="placeholder"
      v-model="currentValue"
      @change="inputChange"
      @keyup.enter="inputEnter"
    />
    <div
      class="vui-input--append"
      :style="{ flexBasis: appendWidth }"
      v-if="append"
    >
      <slot name="append">
        <div @click="inputClick">删除</div>
      </slot>
    </div>
  </div>
</template>

<style   scoped>
</style>
