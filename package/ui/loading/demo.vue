<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 09:39:17
 * @LastEditTime: 2019-08-11 09:49:29
 * @LastEditors: Please set LastEditors
 -->
<script>
import Vue from "vue";
import ui from "./index";
Vue.use(ui)
  .use(ui.Circle)
  .use(ui.Cross)
  .use(ui.Rect)
  .use(ui.Ring)
  .use(ui.Round)
  .use(ui.Turn)
  .use(ui.Wave);
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {};
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
export default instance;
</script>

<template>
  <div class="hj-padding--large">
    <div class="hj-margin-bottom--large">
      <h3 class="hj-margin-bottom--large">loading-circle</h3>
      <div class="hj-flex hj-justify-content--space-around">
        <vui-loading-circle color="#000"></vui-loading-circle>
        <vui-loading-circle color="red"></vui-loading-circle>
        <vui-loading-circle color="#000" size="20px"></vui-loading-circle>
        <vui-loading-circle color="#000" itemSize="3px"></vui-loading-circle>
      </div>
    </div>
    <div class="hj-margin-bottom--large">
      <h3 class="hj-margin-bottom--large">loading-cross</h3>
      <div class="hj-flex hj-justify-content--space-around">
        <vui-loading-cross color="#000"></vui-loading-cross>
        <vui-loading-cross color="#000" :duration="4000"></vui-loading-cross>
        <vui-loading-cross color="red" :duration="4000"></vui-loading-cross>
        <vui-loading-cross
          color="red"
          :duration="4000"
          size="40px"
        ></vui-loading-cross>
      </div>
    </div>

    <div class="hj-margin-bottom--large">
      <h3 class="hj-margin-bottom--large">loading-rect</h3>
      <div class="hj-flex hj-justify-content--space-around">
        <vui-loading-rect color="#000"></vui-loading-rect>
        <vui-loading-rect color="#000" size="40px"></vui-loading-rect>
        <vui-loading-rect color="#000" layerColor="red"></vui-loading-rect>
        <vui-loading-rect color="red" layerColor="#000"></vui-loading-rect>
        <vui-loading-rect color="#000" :itemWidth="8"></vui-loading-rect>
        <vui-loading-rect color="#000" :itemNumber="4"></vui-loading-rect>
        <vui-loading-rect color="#000" :itemScale="1"></vui-loading-rect>
        <vui-loading-rect color="#000" :duration="4000"></vui-loading-rect>
      </div>
    </div>

    <div class="hj-margin-bottom--large">
      <h3 class="hj-margin-bottom--large">loading-ring</h3>
      <div class="hj-flex hj-justify-content--space-around">
        <vui-loading-ring color="#000"></vui-loading-ring>
        <vui-loading-ring color="#000" :copies="2"></vui-loading-ring>
        <vui-loading-ring color="#000" :copies="3"></vui-loading-ring>
        <vui-loading-ring color="#000" :copies="4"></vui-loading-ring>
        <vui-loading-ring color="red"></vui-loading-ring>
        <vui-loading-ring color="#000" size="40px"></vui-loading-ring>
        <vui-loading-ring color="#000" layerColor="red"></vui-loading-ring>
        <vui-loading-ring color="#000" :layerSize="8"></vui-loading-ring>
        <vui-loading-ring color="#000" :duration="4000"></vui-loading-ring>
      </div>
    </div>

    <div class="hj-margin-bottom--large">
      <h3 class="hj-margin-bottom--large">loading-round</h3>
      <div class="hj-flex hj-justify-content--space-around">
        <vui-loading-round></vui-loading-round>
        <vui-loading-round layerColor="red"></vui-loading-round>
        <vui-loading-round size="40px"></vui-loading-round>
        <vui-loading-round :itemWidth="100"> </vui-loading-round>
        <vui-loading-round duration="3000ms"> </vui-loading-round>
      </div>
    </div>

    <div class="hj-margin-bottom--large">
      <h3 class="hj-margin-bottom--large">loading-turn</h3>
      <div class="hj-flex hj-justify-content--space-around">
        <vui-loading-turn color="red"></vui-loading-turn>
        <vui-loading-turn color="red" size="50px"></vui-loading-turn>
        <vui-loading-turn color="red" duration="5s"></vui-loading-turn>
      </div>
    </div>

    <div class="hj-margin-bottom--large">
      <h3 class="hj-margin-bottom--large">loading-wave</h3>
      <div class="hj-flex hj-justify-content--space-around">
        <vui-loading-wave color="red"></vui-loading-wave>
        <vui-loading-wave color="red" :size="40"></vui-loading-wave>
        <vui-loading-wave color="red" :itemNumber="3"></vui-loading-wave>
        <vui-loading-wave
          color="red"
          :itemNumber="3"
          :spacing="8"
        ></vui-loading-wave>
        <vui-loading-wave color="red" align="center"></vui-loading-wave>
        <vui-loading-wave color="red" align="end"></vui-loading-wave>
        <vui-loading-wave color="red" direction="ver"></vui-loading-wave>
      </div>
    </div>
  </div>
</template>

<style   scoped>
</style>