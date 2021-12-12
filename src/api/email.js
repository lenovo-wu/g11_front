

import request from '@/utils/request'

// 
export function getCheckcode(EmailDTO) {
  return request({
    url: '/mail/getCheckCode',
    method: 'post',
    data: EmailDTO
  })
}


  export function checkCode(EmailDTO) {
    return request({
      url: '/mail/CheckCode',
      method: 'post',
      data: EmailDTO
    })
  }