import axios from "axios";

const http = axios.create({
  baseURL:  process.env.NODE_ENV=== "development"?'http://192.168.0.76:8465':'http://47.120.45.156:8465',
  timeout: 50000,
  headers:{
    'Content-Type': 'application/json; charset=utf-8'
  }
});

console.log(http.defaults.baseURL);

export  default http
