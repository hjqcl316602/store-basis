/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-09 11:47:30
 * @LastEditTime: 2019-08-10 09:42:09
 * @LastEditors: Please set LastEditors
 */

const index = r => require.ensure([], () => r(require('../../package/ui/demo.vue')), 'index');
const border = r => require.ensure([], () => r(require('../../package/ui/border/demo.vue')), 'border');
const icon = r => require.ensure([], () => r(require('../../package/ui/icon/demo.vue')), 'icon');
const loading = r => require.ensure([], () => r(require('../../package/ui/loading/demo.vue')), 'loading');
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
