import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    cookie:'',
    isLogin:false,
    profileInfo:{},
    userLevelInfo:{},
    isPlay:false,
    playingSong:{}
  },
  mutations: {
    setToken(state,token){
      state.token = token
      localStorage.token = token
    },
    setCookie(state,cookie){
      state.cookie = cookie
      localStorage.cookie = cookie
    },
    setIsLogin(state,loginInfo){
      state.isLogin = loginInfo
    },
    setProfileInfo(state,profileinfo){
      state.profileInfo = profileinfo
    },
    setUserLevelInfo(state,userLevelinfo){
      state.userLevelInfo = userLevelinfo
    },
    setIsPlay(state,isPlay){
      state.isPlay = isPlay
    },
    setPlayingSong(state,playingSong){
      state.playingSong = playingSong
    },
  },
  getters: {
    getToken(state){
      if(!state.token){
        state.token = localStorage.getItem('token')
      }
      return state.token
    },
    getCookie(state){
      if(!state.cookie){
        state.cookie = localStorage.getItem('cookie')
      }
      return state.token
    },
    getIsLogin(){
      return state.isLogin
    },
    getIsPlay(){
      return state.isPlay
    },
    getPlayingSong(){
      return state.playingSong
    }
  },
  actions: {
  },
  modules: {
  }
})
