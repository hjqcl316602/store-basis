/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 11:47:30
 * @LastEditTime: 2019-08-27 18:30:05
 * @LastEditors: Please set LastEditors
 */

const index = r => require.ensure([], () => r(require('../../package/ui/demo.vue')), 'index');
const border = r => require.ensure([], () => r(require('../../package/ui/border/demo.vue')), 'border');
const button = r => require.ensure([], () => r(require('../../package/ui/button/demo.vue')), 'button');
const grail = r => require.ensure([], () => r(require('../../package/ui/grail/demo.vue')), 'grail');
const grid = r => require.ensure([], () => r(require('../../package/ui/grid/demo.vue')), 'grid');
const icon = r => require.ensure([], () => r(require('../../package/ui/icon/demo.vue')), 'icon');
const loading = r => require.ensure([], () => r(require('../../package/ui/loading/demo.vue')), 'loading');
const loadingBar = r => require.ensure([], () => r(require('../../package/ui/loading-bar/demo.vue')), 'loadingBar');
const mask = r => require.ensure([], () => r(require('../../package/ui/mask/demo.vue')), 'mask');
const ratio = r => require.ensure([], () => r(require('../../package/ui/ratio/demo.vue')), 'ratio');
const tab = r => require.ensure([], () => r(require('../../package/ui/tab/demo.vue')), 'tab');
const tag = r => require.ensure([], () => r(require('../../package/ui/tag/demo.vue')), 'tag');

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
