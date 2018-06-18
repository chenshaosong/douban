import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    commenNum:0
  },
  getters:{
    changedd(state){

    }
  },
  mutations:{
    comChange(state,val){
      state.commenNum = val;
    }
  },
  actions:{
    getData(context){
      //可以执行异步操作
      //下边的测试不是异步操作，只是测试context而已
      // context.commit('addd',10);
    }
  }
});export default store;

