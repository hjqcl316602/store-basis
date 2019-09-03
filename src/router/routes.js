/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 11:47:30
 * @LastEditTime: 2019-09-03 21:18:38
 * @LastEditors: Please set LastEditors
 */

const index = r => require.ensure([], () => r(require('../view/index.vue')), 'index');
const border = r => require.ensure([], () => r(require('../view/border.vue')), 'border');
const button = r => require.ensure([], () => r(require('../view/button.vue')), 'button');
const floater = r => require.ensure([], () => r(require('../view/floater.vue')), 'floater');
const grail = r => require.ensure([], () => r(require('../view/grail.vue')), 'grail');
const grid = r => require.ensure([], () => r(require('../view/grid.vue')), 'grid');
const icon = r => require.ensure([], () => r(require('../view/icon.vue')), 'icon');
const image = r => require.ensure([], () => r(require('../view/image.vue')), 'image');
const loading = r => require.ensure([], () => r(require('../view/loading.vue')), 'loading');
const loadingBar = r => require.ensure([], () => r(require('../view/loading-bar.vue')), 'loadingBar');
const mask = r => require.ensure([], () => r(require('../view/mask.vue')), 'mask');
const ratio = r => require.ensure([], () => r(require('../view/ratio.vue')), 'ratio');
const tab = r => require.ensure([], () => r(require('../view/tab.vue')), 'tab');
const tag = r => require.ensure([], () => r(require('../view/tag.vue')), 'tag');

const routes = [
  { path: '*', redirect: '/index', meta: { hide: true } },
  { path: '/', redirect: '/index', meta: { hide: true } },
  { path: '/index', name: 'index', component: index, meta: { hide: true, title: '组件库' } },
  {
    path: '/border',
    name: 'border',
    component: border,
    meta: { title: '边框', en: 'border' }
  },
  {
    path: '/button',
    name: 'button',
    component: button,
    meta: { title: '按钮', en: 'button' }
  },
  {
    path: '/floater',
    name: 'floater',
    component: floater,
    meta: { title: '悬浮', en: 'floater' }
  },
  {
    path: '/grail',
    name: 'grail',
    component: grail,
    meta: { title: '圣杯布局', en: 'grail' }
  },
  {
    path: '/grid',
    name: 'grid',
    component: grid,
    meta: { title: '栅格布局', en: 'grid' }
  },
  {
    path: '/icon',
    name: 'icon',
    component: icon,
    meta: { title: '图标', en: 'icon' }
  },
  {
    path: '/image',
    name: 'image',
    component: image,
    meta: { title: '图片', en: 'image' }
  },
  {
    path: '/loading',
    name: 'loading',
    component: loading,
    meta: { title: '加载动画', en: 'loading' }
  },
  {
    path: '/loading-bar',
    name: 'loading-bar',
    component: loadingBar,
    meta: { title: '加载进度条', en: 'loading-bar' }
  },
  {
    path: '/mask',
    name: 'mask',
    component: mask,
    meta: { title: '遮罩层', en: 'mask' }
  },
  {
    path: '/ratio',
    name: 'ratio',
    component: ratio,
    meta: { title: '等比例尺寸', en: 'ratio' }
  },
  {
    path: '/tab',
    name: 'tab',
    component: tab,
    meta: { title: '标签', en: 'tab' }
  },
  {
    path: '/tag',
    name: 'tag',
    component: tag,
    meta: { title: '标记', en: 'tag' }
  }
];
export default routes;
