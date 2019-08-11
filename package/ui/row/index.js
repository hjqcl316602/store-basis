/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 09:08:40
 * @LastEditTime: 2019-08-11 09:26:36
 * @LastEditors: Please set LastEditors
 */
import Row from './row.vue';
import Span from './span.vue';

Row.install = function(Vue) {
  Vue.component(Row.name, Row);
};

Span.install = function(Vue) {
  Vue.component(Span.name, Span);
};
Row.Span = Span;

export default Row;
