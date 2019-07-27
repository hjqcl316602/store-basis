import Tag from './index.vue';
Tag.install = function(Vue, options) {
  Vue.component(Tag.name, Tag);
};
export default Tag;
