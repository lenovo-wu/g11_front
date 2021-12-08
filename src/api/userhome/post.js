//未使用


import request from '@/utils/request'

export function getList(pageNo,size) {
  return request(({
    url: '/user/colllist ',
    method: 'get',
    params: { pageNo:pageNo, size:size}
  }))
}
