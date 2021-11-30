import request from '@/utils/request'

export function deleteuser(userId){
    return request({
        url:'/user/delete/'+userId,
        method: 'delete',
    })
}