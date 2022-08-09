import { login } from "@/api/user"
import { getToken, removeToken, setToken } from "@/utils/auth"
// import { Message } from "element-ui"

export default{
  namespaced: true,
  state: {
    token: getToken()
  },
  mutations: {
    // 定义同步方法和清除token
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    removeToken (state) {
      state.token = undefined
      removeToken()
    }
  },
 
  actions: {
    // 定义异步方法，发请求
    async login(context, data) {
      // 报错处理
      // try {
      //   const { data: { success, message, data: token } } = await login(data)
      //   // 提示错误信息
      //   if (success) {
      //     context.commit('setToken', token)
      //   } else {
      //     Message.error(message)
      //   }
      // } catch (error) {
      //   Message.error('服务器报错，请稍后重试')
      // }
      const token = await login(data)
      context.commit('setToken',token)
    
    }
  }
}