<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 10:13:01
 * @LastEditTime: 2019-08-15 09:37:37
 * @LastEditors: Please set LastEditors
 -->
<script>
import Vue from "vue";
import Grail from "./index";

Vue.use(Grail).use(Grail.Child);
const instance = {};
instance.name = "";
instance.props = {};
instance.data = function() {
  return {
    text:
      "颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间"
  };
};
instance.methods = {
  change() {
    this.text +=
      "颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间颠三倒四电话季度时间";
  }
};
instance.created = function() {};
instance.mounted = function() {};
export default instance;
</script>

<template>
  <div class="hj-padding--large">
    <vui-grail class="hj-margin-bottom">
      <div style="background-color:blue;height:100px"></div>
      <vui-grail-child type="top">
        <div style="background-color:red;">
          <div>
            top,以子元素的高度设置父元素的padding-top值
          </div>
        </div>
      </vui-grail-child>
    </vui-grail>
    <vui-grail class="hj-margin-bottom">
      <div style="background-color:blue;height:100px"></div>
      <vui-grail-child type="top">
        <div style="background-color:red;height:50px">
          <div>
            top，设置子元素的固定高度
          </div>
        </div>
      </vui-grail-child>
    </vui-grail>

    <vui-grail class="hj-margin-bottom">
      <div style="background-color:blue;height:100px"></div>
      <vui-grail-child type="top" :padding="false">
        <div style="background-color:red;">
          <div>
            top，不设置父元素的padding值
          </div>
        </div>
      </vui-grail-child>
    </vui-grail>

    <vui-grail class="hj-margin-bottom">
      <div style="background-color:blue;">
        圣杯布局底部padding值会根据底部相对布局的元素的高度自动设置，也可以设置底部元素的固定高度
      </div>
      <vui-grail-child type="bottom">
        <div style="background-color:red;">
          <div>
            bottom
          </div>
        </div>
      </vui-grail-child>
    </vui-grail>
    <vui-grail class="hj-margin-bottom">
      <div style="background-color:blue;">
        圣杯布局左部padding值会根据左部相对布局的元素的高度自动设置，也可以设置左部元素的固定高度
      </div>
      <vui-grail-child type="left">
        <div style="background-color:red;">
          <div>
            left
          </div>
        </div>
      </vui-grail-child>
    </vui-grail>
    <vui-grail class="hj-margin-bottom">
      <div style="background-color:blue;">
        圣杯布局右部padding值会根据右部相对布局的元素的高度自动设置，也可以设置右部元素的固定高度
      </div>
      <vui-grail-child type="right">
        <div style="background-color:red;">
          <div>
            right
          </div>
        </div>
      </vui-grail-child>
    </vui-grail>
    <vui-grail class="hj-margin-bottom">
      <div style="height:200px;background-color:blue;padding:20px">
        圣杯布局 cover ，父元素的高宽既是子元素的高宽
      </div>
      <vui-grail-child type="cover" z-index="2">
        <div style="">
          <div>
            cover
          </div>
        </div>
      </vui-grail-child>
    </vui-grail>
    <vui-grail class="hj-margin-bottom">
      <div style="height:200px;background-color:blue;padding:20px">
        圣杯布局 center ，子元素的高宽自动
      </div>
      <vui-grail-child type="center" z-index="2">
        <div style="">
          <div>
            center
          </div>
        </div>
      </vui-grail-child>
    </vui-grail>
  </div>
</template>

<style   scoped>
</style>