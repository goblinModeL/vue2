import http from "./http";

const service ={
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url,params){
    const config = {
      method: 'get',
      url:url
    }
    if(params) config.params = params
    return http(config)
  },
  post(url,params){
    const config = {
      method: 'post',
      url:url
    }
    if(params) config.data = params
    return http(config)
  },
}
//导出
export default http
