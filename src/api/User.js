import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/User',
    method: 'post',
    data
  })
}

export function del(uid) {
  return request({
    url: 'api/User/' + uid,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/User',
    method: 'put',
    data
  })
}

export function onStatus(id, data) {
  return request({
    url: 'api/User/onStatus/' + id,
    method: 'post',
    data
  })
}

export function editp(data) {
  return request({
    url: 'api/User/money',
    method: 'post',
    data
  })
}
