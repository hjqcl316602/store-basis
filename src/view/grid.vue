<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-11 09:31:28
 * @LastEditTime: 2019-09-03 17:04:40
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
  <vui-box padding="large">
    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">span</vui-text>
      </vui-box>
      <vui-grid>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="warning">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">span | gutter</vui-text>
      </vui-box>
      <vui-grid gutter="10">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="warning">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">span | gutter | gutter-row</vui-text>
      </vui-box>
      <vui-grid gutter="10" gutter-row="10">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="warning">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="success">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="black">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="red">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">span | push </vui-text>
      </vui-box>
      <vui-grid>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">
            span=8
          </vui-box>
        </vui-grid-child>
        <vui-grid-child span="8" push="8">
          <vui-box height="medium" background-color="primary">
            span=8|push=8
          </vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          row = 32 | span
        </vui-text>
      </vui-box>
      <vui-grid row="32">
        <vui-grid-child span="16">
          <vui-box height="medium" background-color="danger">span=16</vui-box>
        </vui-grid-child>
        <vui-grid-child span="16">
          <vui-box height="medium" background-color="primary">span=16</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          justify-content=flex-end |span
        </vui-text>
      </vui-box>
      <vui-grid justify-content="flex-end">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          justify-content=flex-end |span | pull
        </vui-text>
      </vui-box>
      <vui-grid justify-content="flex-end">
        <vui-grid-child span="8" pull="4">
          <vui-box height="medium" background-color="danger">
            span=8 | pull=4
          </vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">justify-content=center | span</vui-text>
      </vui-box>
      <vui-grid justify-content="center">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          justify-content=space-between | span
        </vui-text>
      </vui-box>
      <vui-grid justify-content="space-between">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          justify-content=space-around | span
        </vui-text>
      </vui-box>
      <vui-grid justify-content="space-around">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          align-items="center" | span
        </vui-text>
      </vui-box>
      <vui-grid align-items="center">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="larger" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>
    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          align-items="flex-end" | span
        </vui-text>
      </vui-box>
      <vui-grid align-items="flex-end">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="larger" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>
    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          align-items="flex-start" | span
        </vui-text>
      </vui-box>
      <vui-grid align-items="flex-start">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="larger" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          flex-direction=row | span
        </vui-text>
      </vui-box>
      <vui-grid flex-direction="row">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          flex-direction=column | span
        </vui-text>
      </vui-box>
      <vui-grid flex-direction="column">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          flex-direction=column | justify-content=space-between | span |
          height=120px
        </vui-text>
      </vui-box>
      <vui-grid
        flex-direction="column"
        justify-content="space-between"
        style="height:120px"
      >
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          flex-direction=column | justify-content=space-between | span |
          height=120px | align-items="center"
        </vui-text>
      </vui-box>
      <vui-grid
        flex-direction="column"
        justify-content="space-between"
        align-items="center"
        style="height:120px"
      >
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="4">
          <vui-box height="medium" background-color="primary">span=4</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          align-content="center" | span | height="120px"
        </vui-text>
      </vui-box>
      <vui-grid align-content="center" style="height:120px">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          align-content="space-between" | span | height="120px"
        </vui-text>
      </vui-box>
      <vui-grid align-content="space-between" style="height:120px">
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="medium" background-color="primary">span=8</vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          span | align-self
        </vui-text>
      </vui-box>
      <vui-grid>
        <vui-grid-child span="8">
          <vui-box height="small" background-color="danger">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8">
          <vui-box height="larger" background-color="primary">span=8</vui-box>
        </vui-grid-child>
        <vui-grid-child span="8" align-self="flex-end">
          <vui-box height="smaller" background-color="danger">
            span=8 | align-self="flex-end"
          </vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          width | flex-grow
        </vui-text>
      </vui-box>
      <vui-grid>
        <vui-grid-child width="150px">
          <vui-box height="small" background-color="danger">
            width="100px"
          </vui-box>
        </vui-grid-child>
        <vui-grid-child flex-grow="1">
          <vui-box height="larger" background-color="primary">
            flex-grow="1"
          </vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>

    <vui-box margin-bottom="large">
      <vui-box margin-bottom="medium">
        <vui-text bold color="primary">
          width | flex-grow
        </vui-text>
      </vui-box>
      <vui-grid>
        <vui-grid-child flex-grow="0">
          <vui-box height="small" background-color="danger">
            flex-grow="0"
          </vui-box>
        </vui-grid-child>
        <vui-grid-child flex-grow="1">
          <vui-box height="larger" background-color="primary">
            flex-grow="1"
          </vui-box>
        </vui-grid-child>
      </vui-grid>
    </vui-box>
  </vui-box>
</template>

<style   scoped>
</style>