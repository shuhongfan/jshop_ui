import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/Express',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/Express/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/Express',
    method: 'put',
    data
  })
}

