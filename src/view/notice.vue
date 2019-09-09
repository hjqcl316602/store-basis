<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-06 17:49:18
 * @LastEditTime: 2019-09-09 12:10:17
 * @LastEditors: Please set LastEditors
 -->
<script>
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {
    show: {
      first: true
    }
  };
};
instance.computed = {};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
instance.watch = {};
export default instance;
</script> 

<template>
  <div class="vui-padding--large">
    <vui-notice v-model="show.first">
      <div class="vui-padding">
        <div>
          通知组件，可以设置是否需要body的padding-top值【padding】，标题【title】在没有自定标题情况下有效，是否显示【v-model】
        </div>
      </div>
    </vui-notice>
    <vui-button pack color="primary" @click="show.first = !show.first">
      notice
    </vui-button>
  </div>
</template>

<style   scoped>
</style>