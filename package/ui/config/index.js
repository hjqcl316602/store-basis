export let loading = {
  cross: {
    color: '#fff', // 每个圆的颜色
    size: 20 // 每个圆的大小尺寸
  },
  cricle: {
    color: '#fff', // 每个圆的颜色
    size: 10 // 每个圆的大小尺寸
  }
};

export let input = {
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
