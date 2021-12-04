import request from '@/utils/request'
// 列表
export function getList(pageNo,size) {
  return request(({
    url: '/user/colllist ',
    method: 'get',
    params: { pageNo:pageNo, size:size}
  }))
}
