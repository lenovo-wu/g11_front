//用户接口



import request from '@/utils/request'

// 用户主页修改密码
export function updatepass(date) {
  return request({
    url: 'user/updatepass',
    method: 'put',
    data: date
  })
}

//用户主页修改个性签名
export function updatesign(date) {
  return request({
    url: 'user/updatesign',
    method: 'put',
    data: date
  })
}

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
    url: 'reply/reply/' + username,
    method: 'get',
    params: {
      pageNo: page,
      size: size
    }
  })
}
// 用户主页我认领的
export function getInfoByNameForChoose(username, page, size) {
  return request({
    url: 'choose/choose/' + username,
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
    url: 'choose/bechoose/' + username,
    method: 'get',
    params: {
      pageNo: page,
      size: size
    }
  })
}
// 用户主页我的认领
export function getInfoByNameForMyChoose(username, page, size) {
  return request({
    url: 'choose/mychoose/' + username,
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
    url: 'collection/coll/' + username,
    method: 'get',
    params: {
      pageNo: page,
      size: size
    }
  })
}

//提取特定wall
export function loadOneWall(wallid) {
  return request({
    url: 'wall/selectonecoll/'+wallid,
    method: 'get',
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
export function insertFeedback(data){
  return request({
      url:'/feedback/insertFeedback',
      method: 'post',
      data: data
  })}
export function deleteTopic(id) {
  return request({
    url: `/post/delete/${id}`,
    method: 'delete'
  })
}


