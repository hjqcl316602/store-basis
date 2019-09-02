<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-02 20:36:59
 * @LastEditTime: 2019-09-02 23:23:02
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
    <vui-box marginBottom="large">
      <vui-box marginBottom="medium">
        <vui-text bold color="primary">display</vui-text>
      </vui-box>
      <vui-box> block</vui-box>
      <vui-box inline-block>inline-block</vui-box>
      <vui-box inline>inline</vui-box>
      <vui-box none>none</vui-box>
    </vui-box>
    <vui-box marginBottom="large">
      <vui-box marginBottom="medium">
        <vui-text bold color="primary">padding (margin)</vui-text>
      </vui-box>
      <vui-box padding="smaller">padding | smaller</vui-box>
      <vui-box padding="small">padding | small</vui-box>
      <vui-box padding="medium">padding | medium</vui-box>
      <vui-box padding="large">padding | large</vui-box>
      <vui-box padding="larger">padding | larger</vui-box>
      <vui-box padding-top="smaller">padding-top | smaller</vui-box>
      <vui-box padding-top="small">padding-top | small</vui-box>
      <vui-box padding-top="medium">padding-top | medium</vui-box>
      <vui-box padding-top="large">padding-top | large</vui-box>
      <vui-box padding-top="larger">padding-top | larger</vui-box>
      <vui-box padding-bottom="smaller">padding-bottom | smaller</vui-box>
      <vui-box padding-bottom="small">padding-bottom | small</vui-box>
      <vui-box padding-bottom="medium">padding-bottom | medium</vui-box>
      <vui-box padding-bottom="large">padding-bottom | large</vui-box>
      <vui-box padding-bottom="larger">padding-bottom | larger</vui-box>
      <vui-box padding-left="smaller">padding-left | smaller</vui-box>
      <vui-box padding-left="small">padding-left | small</vui-box>
      <vui-box padding-left="medium">padding-left | medium</vui-box>
      <vui-box padding-left="large">padding-left | large</vui-box>
      <vui-box padding-left="larger">padding-left | larger</vui-box>
      <vui-box padding-right="smaller">padding-right | smaller</vui-box>
      <vui-box padding-right="small">padding-right | small</vui-box>
      <vui-box padding-right="medium">padding-right | medium</vui-box>
      <vui-box padding-right="large">padding-right | large</vui-box>
      <vui-box padding-right="larger">padding-right | larger</vui-box>
      <vui-box padding-right="10px">padding | 自定义 | 10px</vui-box>
    </vui-box>
    <vui-box marginBottom="large">
      <vui-box marginBottom="medium">
        <vui-text bold color="primary">
          height(min-height、max-height、width、min-width、max-width)
        </vui-text>
      </vui-box>
      <vui-box height="smaller"> height | smaller | 28px</vui-box>
      <vui-box height="small"> height | small | 36px</vui-box>
      <vui-box height="medium"> height | medium | 44px</vui-box>
      <vui-box height="large"> height | large | 52px</vui-box>
      <vui-box height="larger"> height | larger | 60px</vui-box>
      <vui-box height="100px"> height | 自定义 | 100px</vui-box>
    </vui-box>

    <vui-box marginBottom="large">
      <vui-box marginBottom="medium">
        <vui-text bold color="primary">
          background-color
        </vui-text>
      </vui-box>
      <vui-box background-color="default">
        background-color | default | #fefefe
      </vui-box>
      <vui-box background-color="primary">
        background-color | primary
      </vui-box>
      <vui-box background-color="danger">
        background-color | danger
      </vui-box>
      <vui-box background-color="warning">
        background-color | warning
      </vui-box>
      <vui-box background-color="success">
        background-color | success
      </vui-box>
      <vui-box background-color="white">
        background-color | white
      </vui-box>
      <vui-box background-color="black">
        background-color | black
      </vui-box>
    </vui-box>
    <vui-box marginBottom="large">
      <vui-box marginBottom="medium">
        <vui-text bold color="primary">
          border-radius
        </vui-text>
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-radius="smaller"
      >
        border-radius | smaller | 2px
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-radius="small"
      >
        border-radius | small | 4px
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-radius="medium"
      >
        border-radius | medium | 8px
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-radius="large"
      >
        border-radius | large | 16px
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-radius="larger"
      >
        border-radius | larger | 32px
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-radius="round"
      >
        border-radius | round
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-radius="100px"
      >
        border-radius | 自定义 | 100px
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-top-left-radius="100px"
      >
        border-top-left-radius | 自定义 | 100px
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-top-left-radius="smaller"
      >
        border-top-left-radius | smaller
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-top-left-radius="small"
      >
        border-top-left-radius | small
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-top-left-radius="medium"
      >
        border-top-left-radius | medium
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-top-left-radius="large"
      >
        border-top-left-radius | large
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-top-left-radius="larger"
      >
        border-top-left-radius | larger
      </vui-box>
      <vui-box
        background-color="danger"
        padding="10px"
        margin="10px"
        border-top-left-radius="round"
      >
        border-top-left-radius | round
      </vui-box>
    </vui-box>
    <vui-box marginBottom="large">
      <vui-box marginBottom="medium">
        <vui-text bold color="primary">
          box-shadow
        </vui-text>
      </vui-box>
      <vui-box margin-bottom="10px" box-shadow="around">
        box-shadow | around
      </vui-box>
      <vui-box margin-bottom="10px" box-shadow="top">
        box-shadow | top
      </vui-box>
      <vui-box margin-bottom="10px" box-shadow="bottom">
        box-shadow | bottom
      </vui-box>
      <vui-box margin-bottom="10px" box-shadow="left">
        box-shadow | left
      </vui-box>
      <vui-box margin-bottom="10px" box-shadow="right">
        box-shadow | right
      </vui-box>
      <vui-box margin-bottom="10px" box-shadow=" 2px  2px 2px red">
        box-shadow | 自定义 | 2px 2px 2px red
      </vui-box>
    </vui-box>
  </vui-box>
</template>

<style   scoped>
</style>