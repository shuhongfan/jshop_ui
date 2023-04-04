import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/WechatTemplate',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/WechatTemplate/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/WechatTemplate',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'api/WechatTemplate',
    method: 'get'
  })
}

