import Carousel from './carousel.vue';
import CarouselItem from './carousel-item.vue';
/**
 * 合并props属性
 * 只能 duration: { type: Number } 而非 duration: Number
 */
const mergeProps = function(target, resource) {
  let resourceKeys = Object.keys(resource);
  resourceKeys.forEach(key => {
    target[key] && (target[key]['default'] = resource[key]);
  });
  return target;
};

const CarouselProps = {
  size: 10,
  duration: 4000,
  color: 'red',
  threshold: 100 // 移动多少距离才更换
};

Carousel.install = function(Vue, options) {
  Carousel.props = mergeProps(Carousel.props, Object.assign(CarouselProps, options));
  Vue.component(Carousel.name, Carousel);
};

const CarouselItemProps = {};

CarouselItem.install = function(Vue, options) {
  CarouselItem.props = mergeProps(CarouselItem.props, Object.assign(CarouselItemProps, options));
  Vue.component(CarouselItem.name, CarouselItem);
};
Carousel.Item = CarouselItem;

export default Carousel;
