//分页查询加载所有反馈
import request from '@/utils/request'

export function load(pageNum,pageSize,search){
    return request({
        url:'/feedback/findPage',
        method: 'get',
        params: {pageNum:pageNum, pageSize:pageSize, search:search}
    })
}