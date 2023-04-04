import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/WechatUser',
    method: 'post',
    data
  })
}

export function del(uid) {
  return request({
    url: 'api/WechatUser/' + uid,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/WechatUser',
    method: 'put',
    data
  })
}
