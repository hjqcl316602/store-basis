<script>
import Vue from "vue";
import Icon from "../icon";
Vue.use(Icon);
const instance = {};
instance.name = "vui-radio-item";
instance.props = {
  name: { type: String },
  label: { type: String },
  disabled: { type: Boolean },
  labelType: { type: String }
};
instance.data = function() {
  return {};
};

instance.methods = {
  changeItem() {
    this.$parent.currentValue = this.name || this.$parent.items.indexOf(this);
  }
};
instance.created = function() {};
instance.mounted = function() {};

instance.beforeCreate = function() {
  this.$parent.items.push(this);
};
instance.beforeDestroy = function() {
  this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
};
instance.computed = {
  className() {
    let className = ["vui-radio-item"];
    if (this.labelType) {
      className.push("vui-radio-item--" + this.labelType);
    }

    return className;
  },
  active() {
    return (
      this.$parent.currentValue === this.name ||
      this.$parent.currentValue === this.$parent.items.indexOf(this)
    );
  }
};
export default instance;
</script>

<template>
  <div :class="className" @click="changeItem">
    <slot>
      <div class="vui-radio-item__wrap">
        <span class="vui-radio-item__label">{{ label }}</span>
        <vui-icon
          :name="
            this.active && !this.disabled ? 'radio-button-on' : 'check-crilce'
          "
          :class="[
            'vui-radio-item__icon',
            { 'vui-radio-item__icon--active': this.active && !this.disabled },
            { 'vui-radio-item__icon--disabled': this.disabled }
          ]"
          :size="20"
        ></vui-icon>
      </div>
    </slot>
  </div>
</template>

<style   scoped>
</style>