import request from "./http";

export  function getlist(url,data){
 return request({
    url: url,
    method: 'get',
    params: data
  })
}

export  function logIn(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
export  function insert(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
export  function openceshi(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
