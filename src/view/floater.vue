<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-31 09:37:36
 * @LastEditTime: 2019-09-03 10:36:07
 * @LastEditors: Please set LastEditors
 -->
<script>
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {
    top: false,
    bottom: false,
    left: false,
    right: false,
    topLeft: false,
    topRight: false,
    bottomLeft: false,
    bottomRight: false
  };
};
instance.methods = {};
instance.created = function() {};
instance.mounted = function() {};
export default instance;
</script>

<template>
  <div class="vui-padding--large">
    <vui-floater type="top" v-if="top" padding>
      <vui-box box-shadow="bottom">
        <vui-text>top</vui-text>
      </vui-box>
    </vui-floater>
    <vui-floater type="bottom" v-if="bottom" padding>
      <vui-box box-shadow="top">
        <vui-text>
          bottom
        </vui-text>
      </vui-box>
    </vui-floater>
    <vui-floater type="left" v-if="left" padding>
      <vui-box box-shadow="right">
        <vui-text>
          left
        </vui-text>
      </vui-box>
    </vui-floater>
    <vui-floater type="right" v-if="right" padding>
      <vui-box box-shadow="left">
        <vui-text>
          right
        </vui-text>
      </vui-box>
    </vui-floater>
    <vui-floater type="top-left" v-if="topLeft">
      <vui-box background-color="primary">
        <vui-text>
          topLeft
        </vui-text>
      </vui-box>
    </vui-floater>
    <vui-floater type="top-right" v-if="topRight">
      <vui-box background-color="primary">
        <vui-text>
          topRight
        </vui-text>
      </vui-box>
    </vui-floater>
    <vui-floater type="bottom-left" v-if="bottomLeft">
      <vui-box background-color="primary">
        <vui-text>
          bottomLeft
        </vui-text>
      </vui-box>
    </vui-floater>
    <vui-floater
      type="bottom-right"
      v-if="bottomRight"
      bottom="10px"
      right="10px"
    >
      <vui-box background-color="primary">
        <vui-text>
          bottomRight | bottom=10px | right=10px
        </vui-text>
      </vui-box>
    </vui-floater>
    <vui-button pack color="primary" @click="top = !top">上</vui-button>
    <vui-button pack color="primary" @click="bottom = !bottom">下</vui-button>
    <vui-button pack color="primary" @click="left = !left">左</vui-button>
    <vui-button pack color="primary" @click="right = !right">右</vui-button>
    <vui-button pack color="primary" @click="topLeft = !topLeft">
      上左
    </vui-button>
    <vui-button pack color="primary" @click="topRight = !topRight">
      上右
    </vui-button>
    <vui-button pack color="primary" @click="bottomLeft = !bottomLeft">
      下左
    </vui-button>
    <vui-button pack color="primary" @click="bottomRight = !bottomRight">
      下右
    </vui-button>
  </div>
</template>

<style   scoped>
</style>