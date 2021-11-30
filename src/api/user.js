import request from '@/utils/request'

// 用户主页
export function getInfoByName(username, page, size) {
  return request({
    url: 'user/' + username,
    method: 'get',
    params: {
      pageNo: page,
      size: size
    }
  })
}
// 用户主页
export function getInfo() {
  return request({
    url: '/ums/user/info',
    method: 'get'
  })
}
// 更新
export function update(user) {
  return request({
    url: '/ums/user/update',
    method: 'post',
    data: user
  })
}

export function getInfoByUid(userid) {
  return request({
    url: '/user/getInfo',
    method: 'get',
    param: userid
  })
}
export function getuser(userId){
  return request({
      url:'/user/search/'+userId,
      method: 'get',
     
  })
}
