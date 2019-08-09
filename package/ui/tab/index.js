import TabGroup from './tab-group.vue';
import Tab from './tab.vue';

TabGroup.install = function(Vue) { 
  Vue.component(TabGroup.name, TabGroup);
};

Tab.install = function(Vue) { 
  Vue.component(Tab.name, Tab);
};
Tab.Group = TabGroup;

export default Tab;
