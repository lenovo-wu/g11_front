import request from '@/utils/request'
// 列表
export function load(pageNum,pageSize,search) {
  return request(({
    url: '/user/findcollPage',
    method: 'get',
    params: { pageNum:pageNum, pageSize:pageSize, search:search}
  }))
}
