import request from '@/utils/request'

// 注册
export function userRegister(userDTO) {
  return request({
    url: 'user/register',
    method: 'post',
    data: userDTO
  })
}

//登录
export function login(data) {
  return request({
    url: 'user/login',
    method: 'post',
    data
  })
}