<script>
const instance = {};
instance.name = "vui-check-group";
instance.props = {
  value: { type: Array },
  least: { type: Boolean },
  type: { type: String }
};
instance.data = function() {
  return {
    items: [],
    currentValue: ""
  };
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {
  this.currentValue = this.value;
  setTimeout(() => {
    let findIndex = this.items.findIndex(el => {
      return el.disabled;
    });
    if (this.value === this.items[findIndex].name) {
      this.currentValue = "";
    }
  }, 0);
};

instance.watch = {
  value(val) {
    this.currentValue = val;
  },
  currentValue(val, oldval) {
    this.$emit("input", val);
  }
};

export default instance;
</script>

<template>
  <div :class="['vui-check-group', `vui-check--` + this.type]">
    <slot></slot>
  </div>
</template>

<style lang="less">
</style> 