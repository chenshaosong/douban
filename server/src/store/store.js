import Vue from 'vue'
import Vuex from 'vuex';
const getData = require('../apis/getData');
Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    commenNum:0,
    imgobj:{},
    life:false
  },
  getters:{
    changeComNum(state){
      //由于sessionStorage不能像vue一样实时刷新，当你改变vuex中的状态，组件会检测到改变，而sessionStorage就不会了，页面要重新刷新才可以看到改变，所以应让vuex中的状态从sessionStorage中得到，这样组件就可以响应式的变化
      //这里是通过getters来派生出commenNum的一些状态，此时的状态是让commenNum从sesstionStorage中获得
        state.commenNum=sessionStorage.getItem('commenNum'); //从sessionStorage中读取状态
      return state.commenNum
    },
    getimgobj(state){
      return state.imgobj;
    }
  },
  mutations:{
    comChange(state,val){
      sessionStorage.setItem("commenNum", val); //添加到sessionStorage
      state.commenNum=val  //同步的改变store中的状态
    },
    giveimg(state,val){
      state.imgobj = val;
    },
    changelife(state,val){
      state.life = val;
    }
  },
  actions:{
    getImg(context,address){
      //可以执行异步操作
      //下边的测试不是异步操作，只是测试context而已
      context.commit('changelife',false);
      getData(address,data=>{
        context.commit('giveimg',data);
        context.commit('changelife',true);
      });
    }
  }
});
export default store;

