import request from '@/utils/request'

export function insertChoose(data){
    return request({
        url:'/choose/insertChoose',
        method: 'post',
        data: data
    })
}