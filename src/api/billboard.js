import request from '@/utils/request'

export function getBillboard(){
    return request({
        url:'/user/username',
        method: 'get'
    })
}
export function getSignature(){
    return request({
        url:'/user/usersignature',
        method: 'get'
    })
}