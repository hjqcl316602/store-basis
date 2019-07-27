import Vue from 'vue';
import Message from './message.vue';

let Instance;
let zIndex = 999;
let MessageInstance = function(message, duration = 3000, type = 'primary') {
  if (!Instance) {
    Instance = Vue.extend(Message);
  }
  zIndex++;
  let component = new Instance({ propsData: { type, message, zIndex } });
  let elem = component.$mount().$el;
  document.body.appendChild(elem);
  let status = false;
  setTimeout(() => {
    component.changeVisible((status = true));
  }, 20);
  setTimeout(() => {
    component.changeVisible((status = false));
  }, duration);

  elem.addEventListener('transitionend', function(e) {
    if (!status && elem) {
      document.body.removeChild(elem);
      elem = null;
    }
  });
};
MessageInstance.danger = (message, duration) => MessageInstance(message, duration, 'danger');
MessageInstance.warning = (message, duration) => MessageInstance(message, duration, 'warning');
MessageInstance.success = (message, duration) => MessageInstance(message, duration, 'success');
MessageInstance.primary = (message, duration) => MessageInstance(message, duration, 'primary');
MessageInstance.default = (message, duration) => MessageInstance(message, duration, 'default');
MessageInstance.install = function(Vue) {
  Vue.prototype.$message = MessageInstance;
};

export default MessageInstance;
