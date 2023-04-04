import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/StoreBargain',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/StoreBargain/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/StoreBargain',
    method: 'put',
    data
  })
}
