import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/WechatReply',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/WechatReply/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/WechatReply',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'api/WechatReply',
    method: 'get'
  })
}

