<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 09:31:28
 * @LastEditTime: 2019-09-02 23:15:20
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
  <div class="vui-padding--large">
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">栅格化</div>
      <vui-grid justify="flex-start">
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:orange"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">栅格化</div>
      <vui-grid justify="flex-start">
        <vui-grid-child :span="8">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="8">
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="8">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">水平间距</div>
      <vui-grid justify="flex-start" :gutter="20">
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:orange"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">水平垂直间距</div>
      <vui-grid justify="flex-start" :gutter="20" :gutter-row="20">
        <vui-grid-child :span="12">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="12">
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="12">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
        <vui-grid-child :span="12">
          <div style="height:40px;background-color:orange"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">右移动</div>
      <vui-grid justify="flex-start">
        <vui-grid-child :span="6" :push="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">左移动</div>
      <vui-grid justify="flex-start">
        <vui-grid-child :span="6" :pull="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">右对齐</div>
      <vui-grid justify="flex-end">
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">水平居中</div>
      <vui-grid justify="center">
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">两边对齐</div>
      <vui-grid justify="space-between">
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">垂直居中</div>
      <vui-grid justify="space-between" items="center">
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:80px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">顶部对齐</div>
      <vui-grid justify="space-between" items="flex-start">
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:80px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">底部对齐</div>
      <vui-grid justify="space-between" items="flex-end">
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:80px;background-color:red"></div>
        </vui-grid-child>
        <vui-grid-child :span="6">
          <div style="height:40px;background-color:yellow"></div>
        </vui-grid-child>
      </vui-grid>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">左边固定，右边自动</div>
      <vui-grid>
        <vui-grid-child width="100px">
          <div style="height:40px;background-color:blue"></div>
        </vui-grid-child>
        <vui-grid-child auto>
          <div style="height:40px;background-color:red"></div>
        </vui-grid-child>
      </vui-grid>
    </div>
  </div>
</template>

<style   scoped>
</style>