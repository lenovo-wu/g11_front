import request from '@/utils/request'

export function loadReplyByWallid(pageNum,pageSize,search,wallId){
    return request({
        url:'/reply/findReplyPage',
        method: 'get',
        params: {pageNum:pageNum, pageSize:pageSize, search:search, wallId:wallId}
    })
}
export function insertReply(data){
    return request({
        url:'/reply/insertReply',
        method: 'post',
        data: data
    })
}