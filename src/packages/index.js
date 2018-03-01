
import Vue from 'vue'
import Alert from './alert/index.js';

const components = [
  Alert
];

const install = function(Vue, opts = {}) {


  components.map(component => {
    Vue.component(component.name, component);
  });


  const ELEMENT = {};
  ELEMENT.size = opts.size || '';


  Vue.prototype.$alert = MessageBox.alert;


  Vue.prototype.$ELEMENT = ELEMENT;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}



export  default  {
  Alert
}
