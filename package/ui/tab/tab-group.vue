<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 09:08:35
 * @LastEditTime: 2019-08-09 21:19:59
 * @LastEditors: Please set LastEditors
 -->
 
<script>
import { getClient } from "../utils/dom";
const config = {
  value: "", //
  fix: true, // [ Boolean  ] 宽度是否固定 false 是指不用设置宽度，而是自动排列
  threshold: 4 // [ Number ] 最多可见数
};
const instance = {};
instance.name = "vui-tab-group";
instance.props = {
  value: { type: String, default: config.value },
  fix: { type: Boolean, default: config.fix },
  threshold: { type: Number, default: config.threshold }
};

instance.data = function() {
  return {
    items: [],
    translateX: 0,
    barTanslateX: 0,
    isTransition: false,
    isBarTransition: false
  };
};
instance.methods = {
  eventStart(e) {
    if (!this.isMove) return false;
    this._startX = getClient(e).x;
    this._translateX = this.translateX;
  },
  eventMove(e) {
    if (!this.isMove) return false;
    this._moveX = getClient(e).x - this._startX;
    let moveX = this._translateX + this._moveX;
    //console.log(moveX);
    this.updateTranslate(moveX, false);
  },
  eventEnd(e) {
    // 子元素的总宽度
  },
  /**
   * 选中更新
   */
  updateSelect(val) {
    let currentItemWidth = 0;
    for (let n = 0; n < this.items.length; n++) {
      let temp = this.items[n];
      let tempWidth = temp.$el.getBoundingClientRect().width;
      if (temp.name === val) {
        currentItemWidth += tempWidth / 2;
        break;
      }
      currentItemWidth += tempWidth;
    }
    this.updateTranslate(this.wrapWidth / 2 - currentItemWidth, true);
  },
  /**
   * 更新tab组件的水平移动距离
   * isTransition : 是指是否需要动画
   */
  updateTranslate(moveX, isTransition) {
    let translateX = Math.max(
      this.wrapWidth - this.itemWidth,
      Math.min(0, moveX)
    );
    this.translateX = translateX;
    this.isTransition = isTransition;
    this.$refs["tabs"].style["transform"] = `translateX(${this.translateX}px)`;
    this.updateBarTRanslate(isTransition);
  },
  /**
   *bar的移动
   */
  updateBarTRanslate(isTransition) {
    let prevWidth = 0;
    for (let n = 0; n < this.items.length; n++) {
      let temp = this.items[n];
      let tempWidth = temp.$el.getBoundingClientRect().width;
      if (temp.name === this.currentValue) {
        this.$refs["bar"].style["width"] = tempWidth + "px";
        break;
      }
      prevWidth += tempWidth;
    }
    let barTanslateX = prevWidth + this.translateX;
    this.isBarTransition = isTransition;
    this.$refs["bar"].style["transform"] = `translateX(${barTanslateX}px)`;
  },

  /**
   * 获取鼠标或手指的当前位置
   */
  getPageX(e) {
    if (e.touches && e.touches[0]) {
      return e.touches[0].pageX || e.touches[0].clientX;
    } else {
      return e.pageX || e.clientX;
    }
  }
};
instance.created = function() {};
instance.mounted = function() {
  this.updateSelect(this.value);
};
instance.updated = function() {
  //this.setItemStyle();
};

instance.watch = {
  currentValue(val, oldval) {
    this.updateSelect(val);
    this.$emit("input", val);
    this.$emit("change", val);
  }
};
instance.computed = {
  currentValue() {
    return this.value;
  },
  wrapWidth() {
    return this.$el.getBoundingClientRect().width;
  },
  itemWidth() {
    let width = 0;
    this.items.forEach(element => {
      width += element.$el.getBoundingClientRect().width;
    });
    return width;
  },
  isMove() {
    return this.wrapWidth < this.itemWidth;
  }
};
export default instance;
</script>

<template>
  <div
    :class="['vui-tab__wrap']"
    @touchstart="eventStart"
    @touchmove="eventMove"
    @touchend="eventEnd"
    @mousedown="eventStart"
    @mousemove="eventMove"
    @mouseup="eventEnd"
  >
    <div
      class="vui-tab-group"
      ref="tabs"
      :class="{ 'vui-tab-group--transition': isTransition }"
    >
      <slot></slot>
    </div>
    <div
      class="vui-tab__bar"
      ref="bar"
      :class="{ 'vui-tab__bar--transition': isBarTransition }"
    ></div>
  </div>
</template>

<style   scoped>
</style>