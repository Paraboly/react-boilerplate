import axios from "axios";
import AuthService from "@views/Login/services/AuthService";

const TOKEN = "abc";
abstract class InterceptersService {
  static registerAxiosInterceptors(): void {
    axios.interceptors.request.use(
      (config) => {
        if (TOKEN) {
          config.headers.Authorization = `bearer ${TOKEN}`;
        }

        return config;
      },
      (err) => Promise.reject(err)
    );
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error?.response?.status === 401) {
          AuthService.logout();
        }
        return Promise.reject(error);
      }
    );
  }
}

export default InterceptersService;
