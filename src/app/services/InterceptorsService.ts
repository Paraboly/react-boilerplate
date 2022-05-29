import axios from "axios";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
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

  static registerMonitoringTools(): void {
    if (process.env.NODE_ENV === "production") {
      Sentry.init({
        dsn: "https://83589d3b50844eca849427bc57ed28ba@o1264454.ingest.sentry.io/6447124",
        integrations: [new BrowserTracing()],
        tracesSampleRate: 1.0
      });

      LogRocket.init("qj3yfa/safetr");
      setupLogRocketReact(LogRocket);
    }
  }
}

export default InterceptersService;
