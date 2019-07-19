# store-vue-ui

npm install store-vue-ui

```js
import { Loading, Input, Image } from 'store-vue-ui';
Vue.use(Loading.Cross)
  .use(Loading.Circle)
  .use(Input)
  .use(Image);
```

## Image

```js
let image = {
  src: '', // 图片地址
  lazy: true, //是否懒加载
  lazyThreshold: 40, // 懒加载阈值，即image的顶部距离窗口的底部的差值
  lazyDuration: 1000, // 懒加载图片定时器的时差
  fillType: 'width', //填充方式  width（宽度100%） height（高度100%） min（至少一边100%） max（至多一边100%） cover（两边100%）
  alignType: 'center', // 对齐方式center top bottom left right top-left top-right bottom-left bottom-right
  width: '', // 图片宽
  height: '' // 图片高
};
```

```html
<vui-image :lazy="true" fill-type="width" align-type="bottom" src="http://img4.duitang.com/uploads/item/201511/26/20151126170245_JEKch.jpeg">
  <vui-loading-circle slot="loading"></vui-loading-circle>
  <div slot="error"></div>
  <!-- -->错了
  <div @click="change">
    <div>dshjdshj</div>
    <div>sdsdhdskdjks打开手机框架的</div>
  </div>
</vui-image>
```

## Loading

```js
let loading = {
  cross: {
    color: '#fff', // 每个圆的颜色
    size: 20 // 每个圆的大小尺寸
  },
  cricle: {
    color: '#fff', // 每个圆的颜色
    size: 10 // 每个圆的大小尺寸
  }
};
```

### Loading.Cross

```html
<vui-loading-cross :size="20px" color="red"></vui-loading-cross>
```

### Loading.Circle

```html
<vui-loading-circle :size="20px" color="red"></vui-loading-circle>
```

## Input

```js
let input = {
  prepend: false, // 是否显示输入框前面部分
  prependWidth: '80px', // 输入框前面部分的宽度
  prependText: '', // 输入框前面部分的文本
  prependTextAlign: 'right', // 输入框前面部分的文本对齐方式
  append: true, // 是否显示输入框后部分
  appendWidth: '40px', // 输入框后面部分的宽度
  appendText: '', // 输入框后面部分的文本
  border: true, // 是否显示border
  borderType: 'round', // border 的类型，包括 bottom round
  borderThin: true, // border 是否是细的
  radiusType: '', // border-radius的大小 normal round
  size: 'medium', // 尺寸类型,包括smaller small medium large larger,
  placeholder: '', //提示语
  type: 'text' //输入的类型
};
```

```html
<vui-input prepend prepend-text="姓名" prepend-width="60px" placeholder="请输入您的真实姓名..." border size="larger" borderType="bottom" type="text" @click="change"> </vui-input>
```
