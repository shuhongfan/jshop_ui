import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'api/StoreCouponIssueUser',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'api/StoreCouponIssueUser/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'api/StoreCouponIssueUser',
    method: 'put',
    data
  })
}
