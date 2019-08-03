<script>
const instance = {};
instance.name = "vui-carousel";
instance.props = {
  duration: { type: Number },
  threshold: { type: Number }
};
instance.data = function() {
  return {
    items: [],
    translateX: 0,
    index: 0,
    transition: false
  };
};
instance.methods = {
  init() {},

  getWidth() {
    return this.$el.getBoundingClientRect().width;
  },
  eventStart(e) {
    this._width = this.getWidth();
    this._startX = this.getPageX(e);
    console.log(this._startX);
  },
  eventMove(e) {
    let moveX = this.getPageX(e) - this._startX;
    this._moveX = this.ease(moveX);
    //console.log(this._moveX);
    this.translateX = this._moveX - this.index * this._width;
  },
  eventEnd(e) {
    if (this._moveX > this.threshold) {
      this.index = Math.max(0, --this.index);
    } else if (this._moveX < -this.threshold) {
      this.index = Math.min(this.items.length - 1, ++this.index);
    }
    if (Math.abs(this._moveX) > 0) {
      this._moveX = 0;
      this.moveToIndex(this.index);
    }
  },
  getPageX(e) {
    return e.touches[0].pageX || e.touches[0].clientX;
  },
  /**
   * @name: 缓动函数，
   * @msg:  需要计算抛物线函数 和 一次函数的重合点，增加动画的舒适性
   * @return: [number]
   */
  ease(value) {
    return value / 2;
  },
  moveToIndex() {
    this.transition = true;
    this.translateX = -this.index * this._width;
    this.$el.addEventListener("transitionend", e => {
      this.transition = false;
      this.$emit("changeEnd", this.index);
    });
  }
};
instance.created = function() {};
instance.mounted = function() {
  this.$nextTick(() => {});
};
instance.computed = {
  className() {
    let className = [];
    if (this.transition) {
      className.push("vui-carousel--transtion");
    }
    return className;
  },
  wrapStyle() {
    let style = {
      transform: `translateX(${this.translateX}px)`
    };
    return style;
  }
};
export default instance;
</script>

<template>
  <div
    class="vui-carousel"
    :class="className"
    @touchstart="eventStart"
    @touchmove="eventMove"
    @touchend="eventEnd"
  >
    <div class="vui-carousel__wrap" ref="wrap" :style="wrapStyle">
      <slot></slot>
    </div>
  </div>
</template>

<style   scoped>
</style>