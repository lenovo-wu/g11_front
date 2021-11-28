import request from '@/utils/request'

export function getUser(){
    return request({
        url:'/user/list',
        method: 'get'
    })
}