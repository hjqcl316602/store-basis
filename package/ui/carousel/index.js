/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-03 13:44:18
 * @LastEditTime: 2019-08-23 11:28:27
 * @LastEditors: Please set LastEditors
 */
import Carousel from './carousel.vue';
import CarouselItem from './carousel-item.vue';

Carousel.install = function(Vue, options) {
  Vue.component(Carousel.name, Carousel);
};

CarouselItem.install = function(Vue, options) {
  Vue.component(CarouselItem.name, CarouselItem);
};
Carousel.Item = CarouselItem;

export default Carousel;
