//分页查询加载所有用户列表
import request from '@/utils/request'

export function load(pageNum,pageSize,search){
    return request({
        url:'/user/findPage',
        method: 'get',
        params: {pageNum:pageNum, pageSize:pageSize, search:search}
    })
}