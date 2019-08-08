import CheckGroup from './check-group.vue';
import Check from './check.vue';
import { mergeProps } from '../utils/lang';

const CheckGroupProps = {
  value: '',
  max: Infinity, // 最多只能选择几个
  type: 'hor' // 类型 hor - 水平 ver - 垂直
};
const CheckProps = {
  disabled: false,
  name: '' // 当前Check的名称，如果name值为空，则父元素的value以角标值计算
};

CheckGroup.install = function(Vue, options) {
  CheckGroup.props = mergeProps(CheckGroup.props, Object.assign(CheckGroupProps, options));
  Vue.component(CheckGroup.name, CheckGroup);
};

Check.install = function(Vue, options) {
  Check.props = mergeProps(Check.props, Object.assign(CheckProps, options));
  Vue.component(Check.name, Check);
};
Check.Group = CheckGroup;

export default Check;
