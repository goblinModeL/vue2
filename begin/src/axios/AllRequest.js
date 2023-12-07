import request from "./request";

export  function getlist(url,data){
 return request({
    url: url,
    method: 'get',
    params: data
  })
}
