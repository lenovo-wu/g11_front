//更新反馈
import request from '@/utils/request'

export function update(data){
    return request({
        url:'/feedback/update',
        method: 'put',
        data: data,
    })
}