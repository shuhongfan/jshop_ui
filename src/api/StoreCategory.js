import request from '@/utils/request'

export function getCates(params) {
  return request({
    url: 'api/StoreCategory',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'api/StoreCategory',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/StoreCategory/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/StoreCategory',
    method: 'put',
    data
  })
}

export default { add, edit, del, getCates }
