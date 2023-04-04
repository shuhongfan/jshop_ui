import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/StoreVisit',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/StoreVisit/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/StoreVisit',
    method: 'put',
    data
  })
}
