/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-27 18:26:18
 * @LastEditTime: 2019-08-31 09:42:02
 * @LastEditors: Please set LastEditors
 */
import UI from './floater.vue';
UI.install = function(Vue, options) {
  Vue.component(UI.name, UI);
};
export default UI;
