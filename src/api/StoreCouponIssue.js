import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/StoreCouponIssue',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/StoreCouponIssue/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/StoreCouponIssue',
    method: 'put',
    data
  })
}
