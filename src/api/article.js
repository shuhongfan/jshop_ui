import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/Article',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/Article/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/Article',
    method: 'put',
    data
  })
}

export function publish(id) {
  return request({
    url: 'api/Article/publish/' + id,
    method: 'get'
  })
}
