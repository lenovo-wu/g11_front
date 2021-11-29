import request from '@/utils/request'

export function update(data){
    return request({
        url:'/user/update',
        method: 'put',
        data: data,
    })
}