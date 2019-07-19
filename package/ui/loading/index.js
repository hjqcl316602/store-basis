import Loading from './index.vue';

import LoadingCross from './loading-cross.vue';
import LoadingCircle from './loading-circle.vue';
import LoadingWave from './loading-wave.vue';

LoadingCross.install = function(Vue, options) {
  Vue.component(LoadingCross.name, LoadingCross);
};

LoadingCircle.install = function(Vue, options) {
  Vue.component(LoadingCircle.name, LoadingCircle);
};
LoadingWave.install = function(Vue, options) {
  Vue.component(LoadingWave.name, LoadingWave);
};

Loading.Cross = LoadingCross;
Loading.Circle = LoadingCircle;
Loading.Wave = LoadingWave;

Loading.install = function(Vue, options) {
  Vue.component(Loading.name, Loading);
};
export default Loading;
