export let loading = {
  cross: {
    color: '#fff', // 每个圆的颜色
    size: 20 // 每个圆的大小尺寸
  },
  cricle: {
    color: '#fff', // 每个圆的颜色
    size: 6, // 每个圆的大小尺寸
    diameter: 24 // 直径
  },
  wave: {
    color: '#fff', // 每个方块的颜色
    size: 4, // 每个方块的大小尺寸 - 宽
    scale: 8, // 比例
    spacing: 2, // 间距
    alignType: 'start', // 对齐方式 top center bottom
    directionType: 'horizontal' // 排列方式  horizontal vertical
  }
};

export let input = {
  border: true, // 是否显示border
  borderType: 'round', // border的类型 top bottom round
  borderStyleType: 'solid', // border样式的类型，包括 solid dashed
  borderWeightType: 'half', // border粗细类型 half thin thiner
  radius: false, // 是否需要radius,当borderType=round才有效
  radiusType: 'normal', // border-radius的大小 normal round
  size: 'medium', // 尺寸类型,包括smaller small medium large larger,
  placeholder: '', //提示语
  type: 'text', //输入的类型,
  readonly: false // 是否是只读性
};

export let image = {
  src: '', // 图片地址
  lazy: true, //是否懒加载
  lazyThreshold: 40, // 懒加载阈值，即image的顶部距离窗口的底部的差值
  lazyDuration: 1000, // 懒加载图片定时器的时差
  fillType: 'width', //填充方式  width（宽度100%） height（高度100%） min（至少一边100%） max（至多一边100%） cover（两边100%）
  alignType: 'center', // 对齐方式center top bottom left right top-left top-right bottom-left bottom-right
  width: '', // 图片宽
  height: '' // 图片高
};

export let wrap = {
  multiple: 1 // 缩放倍数
};
