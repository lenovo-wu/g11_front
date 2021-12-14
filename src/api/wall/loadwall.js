import request from '@/utils/request'

export function loadAllwall(pageNum,pageSize,search){
    return request({
        url:'/wall/findWallPage',
        method: 'get',
        params: {pageNum:pageNum, pageSize:pageSize, search:search}
    })
}
export function loadAllwallSix(pageNum,pageSize,search){
    return request({
        url:'/wall/findWallPage6',
        method: 'get',
        params: {pageNum:pageNum, pageSize:pageSize, search:search}
    })
}
export function loadAllwallNine(pageNum,pageSize,search){
    return request({
        url:'/wall/findWallPage9',
        method: 'get',
        params: {pageNum:pageNum, pageSize:pageSize, search:search}
    })
}
export function loadAllwallHot(pageNum,pageSize,search){
    return request({
        url:'/wall/findHotWallPage',
        method: 'get',
        params: {pageNum:pageNum, pageSize:pageSize, search:search}
    })
}