import Loading from './index.vue';

import LoadingCross from './loading-cross.vue';
import LoadingCircle from './loading-circle.vue';

LoadingCross.install = function(Vue, options) {
  Vue.component(LoadingCross.name, LoadingCross);
};

LoadingCircle.install = function(Vue, options) {
  Vue.component(LoadingCircle.name, LoadingCircle);
};

Loading.Cross = LoadingCross;
Loading.Circle = LoadingCircle;

Loading.install = function(Vue, options) {
  Vue.component(Loading.name, Loading);
};
export default Loading;
