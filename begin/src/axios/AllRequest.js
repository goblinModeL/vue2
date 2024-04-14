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

//当前页面的被浏览次数
export  function getBrowse(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
//体质类型
export  function  Bodytype(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
//问题列表
export  function  Problem(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
//查询评论
export  function  comment(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
//插入评论
export  function  insertcomment(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
//更新orgid
export  function  updateorg(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}

//我的提问
export  function  ProblemMy(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
//删除问题
export  function  delproblem(url,data){
  return request({
    url: url,
    method: 'get',
    params: data
  })
}
