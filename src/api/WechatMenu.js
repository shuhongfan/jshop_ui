import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/WechatMenu',
    method: 'post',
    data
  })
}

export function del(key) {
  return request({
    url: 'api/WechatMenu/' + key,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/WechatMenu',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'api/WechatMenu',
    method: 'get'
  })
}
