import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/sys/login',
    method: 'POST',
    // post通过data传递
    data
  })
}

export function getInfo(token) {
  return request({
    
  })
}

export function logout() {
  return request({
   
  })
}
