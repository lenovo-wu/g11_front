//删除反馈
import request from '@/utils/request'

export function deletefeedback(feedbackId){
    return request({
        url:'/feedback/delete/'+feedbackId,
        method: 'delete',
    })
}