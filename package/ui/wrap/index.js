import Wrap from './index.vue';
Wrap.install = function(Vue, options) {
  Vue.component(Wrap.name, Wrap);
};
export default Wrap;