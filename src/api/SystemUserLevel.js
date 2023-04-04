import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/SystemUserLevel',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/SystemUserLevel/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/SystemUserLevel',
    method: 'put',
    data
  })
}
