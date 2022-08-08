import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'

Vue.use(Vuex)
const test = {
  namespaced: true,
  state: {
    token:undefined
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      console.log('调用了user模块的setToken');
    }
  },
  // 定义异步方法 actions
  actions: {
    // 发请求
    login (context, data) {
      setTimeout(() => {
        const token = '123'
        context.commit('setToken',token)
      },100)
    }
  }
}

const store = new Vuex.Store({
  modules: {
    app,
    settings,
    user,
    test
  },
  // state -存放数据
  state: {
    count: 110,
    age: 18
  },
  // mutations -放同步方法
  mutations: {
    steToken () {
      console.log('调用了根模块的setToken');
    },
    add(state) {
      state.count++
    },
    // 接收参数
    addN(state, num) {
      state.count += num
    }
  },
  // actions -放异步方法
  actions: {
    addSync(context) {
      // context 等效于 store
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    addNSync(context, num) {
      // context 等效于 store
      setTimeout(() => {
        context.commit('addN', num)
      }, 1000)
    }
  },
  // getters -计算属性
  getters: {
    ...getters,
    showCount(state) {
      // console.log(...getters)
      return 'count' + state.num
    }
  }
})

export default store
