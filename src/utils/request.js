import axios from 'axios'
import { Message } from 'element-ui';

const request = axios.create({
  // baseURL:'http://ihrm-java.itheima.net/api'
  // 用环境变量 文件当中数据

  baseURL: process.env.VUE_APP_BASE_API
})
// 写请求浏览器
// 方式一、在axios文档中搜索
// 方式二、用axios片段插件
// ariu 快速写

// 请求拦截器
request.interceptors.request.use(config => {
// Do something before request is sent
 return config;
}, error => {
  
// Do something with request error
return Promise.reject(error);
});


// 响应拦截器
request.interceptors.response.use(response => {
  // 正常情况
  // 解构数据
  const { data: { success, message, data } } = response
    // 状态码为200错误。success为false的错误
    if(success){
    return data
  }else {
      Message.error(message)
      // 产生错误，拦截错误信息登录
      // throw new Error(message)
      // 返回一个失败的Promise
       return Promise.reject(new Error(message))
      
  }
// Do something before response is sent
},error => {
// Do something with response error
  Message.error('服务器报错，请稍后重试')
return Promise.reject(error);
})
export default request
