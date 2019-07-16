<script> 
import { loading } from '../config/index'
export default {
  name: "vui-loading-circle",
  props:{
    color:{
      type:String,
       value:loading.cricle.color
    }
  },
  data() {
    return {};
  }
};
</script>

<template>
  <div class="vui-loading-circle">
    <div class="vui-list vui-list-1">
      <div class="vui-item vui-item-1"></div>
      <div class="vui-item vui-item-2"></div>
      <div class="vui-item vui-item-3"></div>
      <div class="vui-item vui-item-4"></div>
    </div>
    <div class="vui-list vui-list-2">
      <div class="vui-item vui-item-1"></div>
      <div class="vui-item vui-item-2"></div>
      <div class="vui-item vui-item-3"></div>
      <div class="vui-item vui-item-4"></div>
    </div>
    <div class="vui-list vui-list-3">
      <div class="vui-item vui-item-1"></div>
      <div class="vui-item vui-item-2"></div>
      <div class="vui-item vui-item-3"></div>
      <div class="vui-item vui-item-4"></div>
    </div>
  </div>
</template>

<style   scoped>
</style>