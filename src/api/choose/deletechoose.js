//删除认领
import request from '@/utils/request'

export function deletechoose(chooseId){
    return request({
        url:'/choose/delete/'+chooseId,
        method: 'delete',
    })
}