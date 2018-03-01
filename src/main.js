// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/store'
import router from './router'
import MuseUI from 'muse-ui'
import  './components/index.js'
import Page from './components/page/page'
import Alert from  './packages/alert/index.js'

Vue.use(Page)
Vue.use(Alert)

import 'muse-ui/dist/muse-ui.css'
import './style/style.less'



Vue.config.productionTip = true

Vue.use(MuseUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: { App ,MuseUI,Alert}
})
