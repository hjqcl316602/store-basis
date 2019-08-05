import Radio from './radio.vue';
import RadioItem from './radio-item.vue';
import { mergeProps } from '../utils/lang';

const RadioProps = {
  value: 0,
  type: 'vertical' // 类型 horizontal vertical
};
const RadioItemProps = {
  name: '', // 当前radio的名称，如果name值为空，则父元素的value以角标值计算
  label: '', //显示的信息
  labelType: 'next', // 信息的位置 prev next
  disabled: false
};

Radio.install = function(Vue, options) {
  Radio.props = mergeProps(Radio.props, Object.assign(RadioProps, options));
  Vue.component(Radio.name, Radio);
};

RadioItem.install = function(Vue, options) {
  RadioItem.props = mergeProps(RadioItem.props, Object.assign(RadioItemProps, options));
  Vue.component(RadioItem.name, RadioItem);
};
Radio.Item = RadioItem;

export default Radio;
