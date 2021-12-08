//分页查询加载所有表白墙
import request from '@/utils/request'

export function load(pageNum,pageSize,search){
    return request({
        url:'/wall/findWallPage1',
        method: 'get',
        params: {pageNum:pageNum, pageSize:pageSize, search:search}
    })
}