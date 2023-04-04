import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/StoreOrder',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/StoreOrder/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/StoreOrder',
    method: 'put',
    data
  })
}

export function editT(data) {
  return request({
    url: 'api/StoreOrder/check',
    method: 'put',
    data
  })
}

export function refund(data) {
  return request({
    url: 'api/StoreOrder/refund',
    method: 'post',
    data
  })
}

export function editOrder(data) {
  return request({
    url: 'api/StoreOrder/edit',
    method: 'post',
    data
  })
}

export function remark(data) {
  return request({
    url: 'api/StoreOrder/remark',
    method: 'post',
    data
  })
}

export function get() {
  return request({
    url: 'api/Express',
    method: 'get'
  })
}

export function express(data) {
  return request({
    url: 'api/StoreOrder/express',
    method: 'post',
    data
  })
}

