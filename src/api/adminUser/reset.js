//重置用户密码
import request from '@/utils/request'

export function resetuser(data){
    return request({
        url:'/user/reset',
        method: 'put',
        data: data,
    })
}