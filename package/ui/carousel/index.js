import Carousel from './carousel.vue';
import CarouselItem from './carousel-item.vue';
import CarouselBar from './carousel-bar.vue';
import { mergeProps } from '../utils/lang';

const CarouselProps = {
  duration: 3000,
  threshold: 100 // 移动多少距离才更换
};
const CarouselItemProps = {};

const CarouselBarProps = {
  size: 10,
  layerColor: 'rgba(0,0,0,.2)',
  activeColor: '#fff',
  barLen: 0
};
Carousel.install = function(Vue, options) {
  Carousel.props = mergeProps(Carousel.props, Object.assign(CarouselProps, options));
  Vue.component(Carousel.name, Carousel);
};

CarouselItem.install = function(Vue, options) {
  CarouselItem.props = mergeProps(CarouselItem.props, Object.assign(CarouselItemProps, options));
  Vue.component(CarouselItem.name, CarouselItem);
};
Carousel.Item = CarouselItem;

CarouselBar.install = function(Vue, options) {
  CarouselItem.props = mergeProps(CarouselBar.props, Object.assign(CarouselBarProps, options));
  Vue.component(CarouselBar.name, CarouselBar);
};
Carousel.Bar = CarouselBar;

export default Carousel;
