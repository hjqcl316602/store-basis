import Border from './border.vue';
import { mergeProps } from '../utils/lang';

const BorderProps = {
  size: 1, // [ Number ] border的尺寸
  color: '#dedede', // [ String] border的颜色
  left: false, // [ Boolean ] 是否显示左边框
  bottom: false, // [ Boolean ] 是否显示下边框
  right: false, // [ Boolean ] 是否显示右边框
  top: false, // [ Boolean ] 是否显示上边框
  round: false, // [ Boolean ] 是否显示四周的边框
  radius: 0, // [ Number ] border-radiusda大小
  circle: false, //[ Boolean ] 是否是圆角
  type: 'solid' // [ String ] border样式 solid dashed...
};
Border.install = function(Vue, options) {
  Border.props = mergeProps(Border.props, Object.assign(BorderProps, options));
  Vue.component(Border.name, Border);
};

export default Border;
