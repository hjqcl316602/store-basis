<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 22:42:23
 * @LastEditTime: 2019-09-03 17:46:49
 * @LastEditors: Please set LastEditors
 -->
<script>
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
  <vui-box v-if="true" padding="large">
    <vui-box margin-bottom="large">
      <vui-border top>
        <vui-box padding="large">
          <vui-text>top</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>
    <vui-box margin-bottom="large">
      <vui-border bottom>
        <vui-box padding="large">
          <vui-text>bottom</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>
    <vui-box margin-bottom="large">
      <vui-border left>
        <vui-box padding="large">
          <vui-text>left</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>
    <vui-box margin-bottom="large">
      <vui-border right>
        <vui-box padding="large">
          <vui-text>right</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-border bottom color="red">
        <vui-box padding="large">
          <vui-text>bottom | color="red"</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-border bottom color="red" :size="1 / 2">
        <vui-box padding="large">
          <vui-text>bottom | color="red" | size="1/2"</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-border bottom color="red" :size="1 / 3">
        <vui-box padding="large">
          <vui-text>bottom | color="red" | size="1/3"</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-border bottom color="red" :size="1 / 2" type="dashed">
        <vui-box padding="large">
          <vui-text>bottom | color="red" | size="1/2" | type="dashed"</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-border round color="red" :size="1 / 3" radius="4px">
        <vui-box padding="large">
          <vui-text>round | color="red" | size="1/3" | radius="4px"</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-border round color="red" :size="1 / 3" circle>
        <vui-box padding="large">
          <vui-text>round | color="red" | size="1/3" | circle</vui-text>
        </vui-box>
      </vui-border>
    </vui-box>
  </vui-box>
  <div class="vui-padding--large" v-else>
    <div class="vui-margin-bottom">
      <vui-border top>
        <div class="vui-padding">上边框(top)</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border bottom>
        <div class="vui-padding">下边框(bottom)</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border left>
        <div class="vui-padding">左边框(left)</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border right>
        <div class="vui-padding">右边框(right)</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border round>
        <div class="vui-padding">四周(round)</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border round color="red">
        <div class="vui-padding">红色(color="red")</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border round color="red" :size="1 / 2">
        <div class="vui-padding">二分之一像素(:size="1/2")</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border round color="red" :size="1 / 3">
        <div class="vui-padding">三分之一像素(:size="1/3")</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border round color="red" :size="1 / 3" type="dashed">
        <div class="vui-padding">样式（type="dashed"）</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border round color="red" :size="1 / 3" radius="4px">
        <div class="vui-padding">圆角(radius="4px")</div>
      </vui-border>
    </div>
    <div class="vui-margin-bottom">
      <vui-border round color="red" :size="1 / 3" circle>
        <div class="vui-padding">全圆角(circle)</div>
      </vui-border>
    </div>
  </div>
</template>

<style   scoped>
</style>