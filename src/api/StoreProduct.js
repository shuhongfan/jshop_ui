import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/StoreProduct',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/StoreProduct/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/StoreProduct',
    method: 'put',
    data
  })
}

export function onsale(id, data) {
  return request({
    url: 'api/StoreProduct/onsale/' + id,
    method: 'post',
    data
  })
}

export function recovery(id) {
  return request({
    url: 'api/StoreProduct/recovery/' + id,
    method: 'delete'
  })
}

export function isFormatAttr(id, data) {
  return request({
    url: 'api/StoreProduct/isFormatAttr/' + id,
    method: 'post',
    data
  })
}

export function setAttr(id, data) {
  return request({
    url: 'api/StoreProduct/setAttr/' + id,
    method: 'post',
    data
  })
}

export function clearAttr(id) {
  return request({
    url: 'api/StoreProduct/clearAttr/' + id,
    method: 'post'
  })
}

export function getAttr(id) {
  return request({
    url: 'api/StoreProduct/attr/' + id,
    method: 'get'
  })
}

