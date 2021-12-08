//删除表白墙
import request from '@/utils/request'

export function deletewall(wallId){
    return request({
        url:'/wall/delete/'+wallId,
        method: 'delete',
    })
}