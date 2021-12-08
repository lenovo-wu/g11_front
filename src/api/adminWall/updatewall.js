//更新表白墙
import request from '@/utils/request'

export function update(data){
    return request({
        url:'/wall/update',
        method: 'put',
        data: data,
    })
}