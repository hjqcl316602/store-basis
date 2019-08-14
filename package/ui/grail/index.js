/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 10:03:58
 * @LastEditTime: 2019-08-14 10:17:10
 * @LastEditors: Please set LastEditors
 */
import Grail from './grail.vue';
import GrailChild from './grail-child.vue';

Grail.install = function(Vue) {
  Vue.component(Grail.name, Grail);
};

GrailChild.install = function(Vue) {
  Vue.component(GrailChild.name, GrailChild);
};
Grail.Child = GrailChild;

export default Grail;
