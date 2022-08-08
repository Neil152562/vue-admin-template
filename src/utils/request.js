import axios from 'axios'

const request = axios.create({
  baseURL:''
})
// 写请求浏览器
// 方式一、在axios文档中搜索
// 方式二、用axios片段插件
// ariu 快速写

// 请求拦截器
axios.interceptors.request.use(config => {
// Do something before request is sent
 return config;
},error => {
// Do something with request error
return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(response => {
// Do something before response is sent
 return response;
},error => {
// Do something with response error
return Promise.reject(error);
});

export default request
