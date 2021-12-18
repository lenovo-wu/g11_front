
//接受认领
import request from '@/utils/request'

export function acceptchoose(chooseId){
    return request({
        url:'/choose/accept/'+chooseId,
        method: 'delete',
    })
}