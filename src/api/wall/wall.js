import request from '@/utils/request'

export function getWallall(){
    return request({
        url:'/wall/wallall',
        method: 'get'
    })
// }
// export function getWallcontent(){
//     return request({
//         url:'/wall/wallcontent',
//         method: 'get'
//     })
// }
// export function getWalltitle(){
//     return request({
//         url:'/wall/wallcontenttitle',
//         method: 'get'
//     })
// }
// export function getWalltowho(){
//     return request({
//         url:'/wall/wallto',
//         method: 'get'
//     })
 }