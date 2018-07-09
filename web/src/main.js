// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store.js'

Vue.use(Vuex)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.path === '/login'){
    next();
  }
  if (localStorage.getItem("username")){
    next();
  }
  if (!localStorage.getItem("username")){
    next('/login');
  }
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

