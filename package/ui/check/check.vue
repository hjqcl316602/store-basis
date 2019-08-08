<script>
const instance = {};
instance.name = "vui-check";
instance.props = {
  name: { type: String },
  disabled: { type: Boolean }
};
instance.methods = {
  changeStatus() {
    if (this.disabled) return;
    if (!this.$parent.least && this.$parent.currentValue === this.name) {
      this.$parent.currentValue = "";
    } else {
      this.$parent.currentValue = this.name;
    }
  }
};
instance.beforeCreate = function() {
  this.$parent.items.push(this);
};
instance.beforeDestroy = function() {
  this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
};

instance.mounted = function() {};
export default instance;
</script>

<template>
  <div :class="['vui-check']" @click="changeStatus">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>