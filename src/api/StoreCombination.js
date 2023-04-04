import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/StoreCombination',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/StoreCombination/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/StoreCombination',
    method: 'put',
    data
  })
}

export function onsale(id, data) {
  return request({
    url: 'api/StoreCombination/onsale/' + id,
    method: 'post',
    data
  })
}
