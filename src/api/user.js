import request from '@/utils/request'

// 用户主页表白墙
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
// 用户主页评论
export function getInfoByNameForReply(username, page, size) {
  return request({
    url: 'user/reply/' + username,
    method: 'get',
    params: {
      pageNo: page,
      size: size
    }
  })
}
// 用户主页我的认领
export function getInfoByNameForChoose(username, page, size) {
  return request({
    url: 'user/choose/' + username,
    method: 'get',
    params: {
      pageNo: page,
      size: size
    }
  })
}
// 用户主页认领我的
export function getInfoByNameForBeChoose(username, page, size) {
  return request({
    url: 'user/bechoose/' + username,
    method: 'get',
    params: {
      pageNo: page,
      size: size
    }
  })
}
// 用户主页我的收藏
export function getInfoByNameForColl(username, page, size) {
  return request({
    url: 'user/coll/' + username,
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
    url: 'user/info',
    method: 'get'
  })
}
// 更新
export function update(user) {
  return request({
    url: 'user/update',
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
      url:'/user/search',
      method: 'get',
      params:{userId:userId} 
  })
}

export function deleteTopic(id) {
  return request({
    url: `/post/delete/${id}`,
    method: 'delete'
  })
}
