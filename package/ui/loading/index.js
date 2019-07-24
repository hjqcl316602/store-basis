import Loading from './index.vue';
import LoadingCircle from './loading-circle.vue';
import LoadingCross from './loading-cross.vue';
import LoadingRect from './loading-rect.vue';
import LoadingRound from './loading-round.vue';
import LoadingTurn from './loading-turn.vue';
import LoadingWave from './loading-wave.vue';
LoadingCircle.install = function(Vue, options) {
  Vue.component(LoadingCircle.name, LoadingCircle);
};
LoadingCross.install = function(Vue, options) {
  Vue.component(LoadingCross.name, LoadingCross);
};
LoadingRound.install = function(Vue, options) {
  Vue.component(LoadingRound.name, LoadingRound);
};
LoadingRect.install = function(Vue, options) {
  Vue.component(LoadingRect.name, LoadingRect);
};
LoadingTurn.install = function(Vue, options) {
  Vue.component(LoadingTurn.name, LoadingTurn);
};
LoadingWave.install = function(Vue, options) {
  Vue.component(LoadingWave.name, LoadingWave);
};

Loading.Cross = LoadingCross;
Loading.Circle = LoadingCircle;
Loading.Round = LoadingRound;
Loading.Rect = LoadingRect;
Loading.Turn = LoadingTurn;
Loading.Wave = LoadingWave;

Loading.install = function(Vue, options) {
  Vue.component(Loading.name, Loading);
};
export default Loading;
