//登录注册接口



import request from '@/utils/request'

// 注册
export function userRegister(userDTO) {
  return request({
    url: 'user/register',
    method: 'post',
    data: userDTO
  })
}

//修改密码
export function update(user) {
  return request({
    url: 'user/update',
    method: 'post',
    data: user
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
// 登录后获取前台用户信息
export function getUserInfo() {
  return request({
    url: 'user/info',
    method: 'get'
  })
}