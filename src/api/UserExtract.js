import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/UserExtract',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/UserExtract/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/UserExtract',
    method: 'put',
    data
  })
}
