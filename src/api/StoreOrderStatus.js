import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/StoreOrderStatus',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/StoreOrderStatus/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/StoreOrderStatus',
    method: 'put',
    data
  })
}
