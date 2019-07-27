import Icon from './index.vue';
Icon.install = function(Vue, options) {
  Vue.component(Icon.name, Icon);
};
export default Icon;
