import request from '@/utils/request'

export function loadAllwall(pageNum,pageSize,search){
    return request({
        url:'/wall/findWallPage',
        method: 'get',
        params: {pageNum:pageNum, pageSize:pageSize, search:search}
    })
}