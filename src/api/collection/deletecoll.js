//删除收藏
import request from '@/utils/request'

export function deletecoll(collId){
    return request({
        url:'/collection/delete/'+collId,
        method: 'delete',
    })
}