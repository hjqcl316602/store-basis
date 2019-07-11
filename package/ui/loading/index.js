import Loading from './index.vue';

import LoadingCross from './loading-cross.vue';
LoadingCross.install = function(Vue, options) {
  Vue.component(LoadingCross.name, LoadingCross);
};

Loading.Cross = LoadingCross;
Loading.install = function(Vue, options) {
  Vue.component(Loading.name, Loading);
};
export default Loading;
