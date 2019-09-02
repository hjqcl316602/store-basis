<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-28 17:50:15
 * @LastEditTime: 2019-09-02 23:03:35
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
      <div class="vui-margin-bottom">default|long</div>
      <div>
        <vui-text>
          default
        </vui-text>
      </div>
      <div>
        <vui-text long>
          long
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">size</div>
      <div>
        <vui-text size="smaller">
          smaller
        </vui-text>
        <vui-text size="small">
          small
        </vui-text>
        <vui-text size="medium">
          medium
        </vui-text>
        <vui-text size="large">
          large
        </vui-text>
        <vui-text size="larger">
          larger
        </vui-text>
        <vui-text size="26px">
          自定义（26px）
        </vui-text>
      </div>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">color</div>
      <div>
        <vui-text>
          default
        </vui-text>
        <vui-text color="primary">
          primary
        </vui-text>
        <vui-text color="danger">
          danger
        </vui-text>
        <vui-text color="warning">
          warning
        </vui-text>
        <vui-text color="success">
          success
        </vui-text>
        <vui-text color="black">
          black
        </vui-text>
        <vui-text color="dark">
          dark
        </vui-text>
        <vui-text color="light">
          light
        </vui-text>
        <vui-text color="gray">
          gray
        </vui-text>
        <vui-text color="white">
          white
        </vui-text>
        <vui-text color="#020271">
          自定义（#020271）
        </vui-text>
      </div>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">bold</div>
      <div>
        <vui-text bold>
          bold
        </vui-text>
      </div>
    </div>

    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">italic（倾斜）</div>
      <div>
        <vui-text italic>
          italic
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">word-break（截断）</div>
      <div>
        <vui-text word-break="break-all">
          break-all dksakdjskjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjja
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacncncncncncn
          cncncncncncncncncncncncncncncncn cncncncncncncncncncn
        </vui-text>
        <vui-text word-break="break-word">
          break-word dksakdjskjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjja
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacncncncncncn
          cncncncncncncncncncncncncncncncn cncncncncncncncncncn
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">ellipsis（只显示一行）</div>
      <div>
        <vui-text ellipsis>
          的山东快书来抵抗力上课了可多可少的开始离开电视打开圣诞快乐是大开口说来看看打开收款
          塑料袋口说的代理商达克赛德老师的卡死了都 第三库的镂空
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">clamp（只显示两行）</div>
      <div>
        <vui-text clamp>
          的山东快书来抵抗力上课了可多可少的开始离开电视打开圣诞快乐是大开口说来看看打开收款
          塑料袋口说的代理商达克赛德老师的卡死了都 第三库的镂空
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">letter-spacing（文本间距）</div>
      <div>
        <vui-text letter-spacing="smaller" long>
          letter
        </vui-text>
        <vui-text letter-spacing="small" long>
          letter
        </vui-text>
        <vui-text letter-spacing="medium" long>
          letter
        </vui-text>
        <vui-text letter-spacing="large" long>
          letter
        </vui-text>
        <vui-text letter-spacing="larger" long>
          letter
        </vui-text>
        <vui-text letter-spacing="20px" long>
          letter(自定义)
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">word-spacing（单词间距）</div>
      <div>
        <vui-text word-spacing="smaller" long>
          word-spacing smaller
        </vui-text>
        <vui-text word-spacing="small" long>
          word-spacing small
        </vui-text>
        <vui-text word-spacing="medium" long>
          word-spacing medium
        </vui-text>
        <vui-text word-spacing="large" long>
          word-spacing large
        </vui-text>
        <vui-text word-spacing="larger" long>
          word-spacing larger
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">line-height（行高）</div>
      <div>
        <vui-text line-height="smaller" long>
          line-height smaller
        </vui-text>
        <vui-text line-height="small" long>
          line-height small
        </vui-text>
        <vui-text line-height="medium" long>
          line-height medium
        </vui-text>
        <vui-text line-height="large" long>
          line-height large
        </vui-text>
        <vui-text line-height="larger" long>
          line-height larger
        </vui-text>
        <vui-text line-height="2.5" long>
          line-height 2.5
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">text-decoration（装饰）</div>
      <div>
        <vui-text decoration="none">
          decoration none
        </vui-text>
        <vui-text text-decoration="underline">
          decoration underline
        </vui-text>
        <vui-text text-decoration="overline">
          decoration overline
        </vui-text>
        <vui-text text-decoration="line-through">
          decoration line-through
        </vui-text>
        <vui-text text-decoration="blink">
          decoration blink
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">text-algin（对齐方式）</div>
      <div>
        <vui-text text-align="center" long>
          align center
        </vui-text>
        <vui-text text-align="right" long>
          align right
        </vui-text>
        <vui-text text-align="left" long>
          align left
        </vui-text>
      </div>
    </div>
    <div class="vui-margin-bottom--large">
      <div class="vui-margin-bottom">text-indent（首行缩进）</div>
      <div>
        <vui-text text-indent="smaller" long>
          text-indent smaller
        </vui-text>
        <vui-text text-indent="small" long>
          text-indent small
        </vui-text>
        <vui-text text-indent="medium" long>
          text-indent medium
        </vui-text>
        <vui-text text-indent="large" long>
          text-indent large
        </vui-text>
        <vui-text text-indent="larger" long>
          text-indent larger
        </vui-text>
        <vui-text text-indent="40px" long>
          text-indent 40px(自定义)
        </vui-text>
      </div>
    </div>
  </div>
</template>

<style   scoped>
</style>