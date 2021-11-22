import request from '@/utils/request'

export function getBillboard(){
    return request({
        url:'/user/username',
        method: 'get'
    })
}