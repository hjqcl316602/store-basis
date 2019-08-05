<script>
const instance = {};
instance.name = "vui-radio";
instance.props = {
  value: {
    type: [Number, String]
  },
  type: {
    type: [String]
  }
};
instance.data = function() {
  return {
    items: [],
    currentValue: 0
  };
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {
  this.currentValue = this.value;
};

instance.watch = {
  value(val) {
    this.currentValue = val;
  },
  currentValue(val, oldval) {
    this.$emit("input", val);
  }
};

instance.computed = {
  className() {
    let className = ["vui-radio"];
    this.type && className.push("vui-radio--" + this.type);
    return className;
  }
};
export default instance;
</script>

<template>
  <div :class="className">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>