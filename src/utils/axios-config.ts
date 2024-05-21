import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// 创建 axios 实例
const axiosInstance: AxiosInstance = axios.create({
  timeout: 5000, // 请求超时
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
     // @ts-ignore
  (config: AxiosRequestConfig) => {
    // 可以在这里添加 token 等请求头信息
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error: AxiosError) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 处理响应数据
    return response.data;
  },
  (error: AxiosError) => {
    // 处理响应错误
    if (error.response) {
      // 服务器返回的错误状态码
      const status = error.response.status;
      switch (status) {
        case 401:
          // 未授权，可以跳转到登录页面
          // window.location.href = '/login';
          break;
        case 403:
          // 禁止访问
          break;
        case 500:
          // 服务器错误
          break;
        default:
      }
    } else {
      // 处理其他错误
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
