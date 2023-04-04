import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/UserBill',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/UserBill/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/UserBill',
    method: 'put',
    data
  })
}
