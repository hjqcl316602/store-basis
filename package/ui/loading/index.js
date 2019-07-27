import Vue from 'vue';
import Loading from './loading.vue';
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

let Instance;

let LoadingInstance = function() {
  if (!Instance) {
    Instance = Vue.extend(Loading);
  }
  let component, elem;
  return {
    show(message) {
      if (component) return;
      component = new Instance({ propsData: { message } });
      elem = component.$mount().$el;
      document.body.appendChild(elem);
      setTimeout(() => {
        component.changeVisible((status = true));
      }, 20);
    },
    clear() {
      component.changeVisible((status = false));
      elem.addEventListener('transitionend', function(e) {
        document.body.removeChild(elem);
        elem = null;
        component = null;
      });
    }
  };
};
let LoadingInstances = LoadingInstance();

export default Loading;
