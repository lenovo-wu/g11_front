import request from '@/utils/request'

export function getWalltime(){
    return request({
        url:'/wall/walltime',
        method: 'get'
    })
}
export function getWallcontent(){
    return request({
        url:'/wall/wallcontent',
        method: 'get'
    })
}
export function getWalltitle(){
    return request({
        url:'/wall/wallcontenttitle',
        method: 'get'
    })
}
