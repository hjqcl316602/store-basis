<script>
import Vue from "vue";
import Mask from "../mask";
import { confirm } from "../config";

Vue.use(Mask);

const instance = {};
instance.name = "vui-confirm";
instance.props = {
  title: { type: String, default: confirm.title },
  closable: { type: Boolean, default: confirm.closable },
  scrollable: { type: Boolean, default: confirm.scrollable },
  maskShow: { type: Boolean, default: confirm.maskShow },
  okShow: { type: Boolean, default: confirm.okShow },
  cancelShow: { type: Boolean, default: confirm.cancelShow },
  okText: { type: String, default: confirm.okText },
  cancelText: { type: String, default: confirm.cancelText },
  value: { type: Boolean, default: confirm.value }
};
instance.data = function() {
  return {};
};
instance.methods = {
  cancelHandler() {
    this.$emit("input", false);
    this.$emit("cancel");
  },
  okHandler() {
    this.$emit("input", false);
    this.$emit("ok");
  }
};
instance.created = function() {};
instance.mounted = function() {};
instance.computed = {
  confirmClassName() {
    let className = ["vui-confirm"];
    if (this.value) {
      className.push("vui-confirm--active");
    }
    return className;
  }
};
export default instance;
</script>

<template>
  <div>
    <vui-mask v-if="maskShow" v-model="value"></vui-mask>
    <div :class="confirmClassName">
      <div class="vui-confirm__header">
        <slot name="header">
          <div class="vui-confirm__header--message">
            {{ title }}
          </div>
        </slot>
      </div>
      <div class="vui-confirm__content">
        <slot></slot>
      </div>
      <div class="vui-confirm__footer">
        <slot name="footer">
          <div class="vui-confirm__footer-btn">
            <div class="vui-btn" @click="cancelHandler">取消</div>
            <div class="vui-btn vui-btn--primary" @click="okHandler">
              确认
            </div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>

<style   scoped>
</style>