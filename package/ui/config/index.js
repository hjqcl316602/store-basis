const loadingRoundImageUrl = require('../assets/icon-loading.png');
export let loading = {
  cross: {
    color: '#fff', // 每个圆的颜色
    size: 30, // 每个圆的大小尺寸
    duration: 1500 //动画周期
  },
  cricle: {
    color: '#fff', // 每个圆的颜色
    size: 30, // 每个圆的大小尺寸
    itemSize: 6 // 每个圆的大小
  },
  round: {
    color: '#fff', // 每个圆的颜色
    itemImage: loadingRoundImageUrl, // 旋转的图片，由于svg没有实现角度渐变功能，只能通过图片背景的方式
    layerColor: '#232323',
    size: 30, //  圆的大小尺寸
    duration: 1500, //移动一圈的时间
    itemWidth: 40 // 旋转动画的宽度
  },
  wave: {
    color: '#fff', // 每个方块的颜色
    size: 30, // 每个方块的大小尺寸 - 宽
    spacing: 2, // 间距
    itemNumber: 5, // 数量
    align: 'start', // 对齐方式 top center bottom
    direction: 'horizontal', // 排列方式  horizontal vertical
    duration: 1500 //动画周期
  },
  turn: {
    color: '#fff', // 每个方块的颜色
    size: 30, // 每个方块的大小尺寸
    duration: 1500 //移动一圈的时间
  },
  rect: {
    itemWidth: 4, //移动条形的宽度
    itemScale: 0.5, // 移动条形的长度，相对边的比例
    itemNumber: 2, //移动条形的数目 1  2  4
    layerColor: '#e5e5e5', // 轨道颜色
    duration: 1500, //移动一圈的时间
    color: '#fff',
    size: 30 // 尺寸,
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

export let slider = {
  layerColor: '#e5e5e5',
  color: '#000',
  size: 2
};

export let upload = {
  layerSize: 40, // 当其内部是默认的slot，可以设置其尺寸
  accept: 'image/*', // 接受的类型
  isRepeat: false //是否可以重复选择
};

export let tag = {
  label: '', // 显示信息
  direction: 'top-right' //位置信息 top-right top-left bottom-right bottom-left top-center bottom-center left-center right-center
};

export let icon = {
  name: 'tupian', //名称
  size: null, //icon 字体大小,不设置默认值是为了能添加class属性覆盖
  color: '' // icon的颜色
};

export let ratio = {
  ratio: 1 // 等比缩放比例 ratio =  宽/高
};

export let accordion = {
  value: '', // v-model 当前选中的名称
  item: {
    name: '', // 名称，
    maxHeight: 100 // 设置一个最大高度 作用于动画
  }
};
