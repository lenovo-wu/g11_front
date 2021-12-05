import request from '@/utils/request'

export function insertCollection(data){
    return request({
        url:'/collection/insertCollection',
        method: 'post',
        data: data
    })
}