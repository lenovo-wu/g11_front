//删除评论
import request from '@/utils/request'

export function deletereply(replyId){
    return request({
        url:'/reply/delete/'+replyId,
        method: 'delete',
    })
}