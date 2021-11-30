import request from '@/utils/request'

export function update(data){
    return request({
        url:'/wall/update',
        method: 'put',
        data: data,
    })
}