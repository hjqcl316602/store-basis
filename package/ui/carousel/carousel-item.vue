<script>
const instance = {};
instance.name = "vui-carousel-item";
instance.props = {};
instance.data = function() {
  return {};
};
instance.beforeCreate = function() {
  this.$parent.items.push(this);
};
instance.beforeDestroy = function() {
  this.$parent.items.splice(this.$parent.items.indexOf(this), 1);
};

export default instance;
</script>

<template>
  <div class="vui-carousel-item">
    <slot></slot>
  </div>
</template>

<style   scoped>
</style>