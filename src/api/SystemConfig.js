import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/SystemConfig',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/SystemConfig/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/SystemConfig',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'api/SystemConfig?size=50',
    method: 'get'
  })
}

