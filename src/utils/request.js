import axios from "axios";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:4523/m1/4973055-4631411-default",
  baseURL: "http://smart-shop.itheima.net/index.php?s=/api",
  timeout: 1000,
});

// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    let res = response.data;
    if (res.status !== 200) {
      this.$Message.error(res.message);
      return Promise.reject(res.message);
    }
    return res;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    this.$Message.error("net error");
    return Promise.reject(error);
  }
);

export default instance;
