/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-03 13:44:18
 * @LastEditTime: 2019-09-09 17:39:46
 * @LastEditors: Please set LastEditors
 */
import Carousel from './carousel.vue';
import CarouselChild from './carousel-child.vue';

Carousel.install = function(Vue, options) {
  Vue.component(Carousel.name, Carousel);
};

CarouselChild.install = function(Vue, options) {
  Vue.component(CarouselChild.name, CarouselChild);
};
Carousel.Child = CarouselChild;

export default Carousel;
