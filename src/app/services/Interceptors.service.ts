import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ReportCallback } from "web-vitals";
import axios from "axios";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import AuthService from "@views/Login/services/Auth.service";
import en_US from "@assets/i18n/en-US.json";
import tr_TR from "@assets/i18n/tr-TR.json";

const TOKEN = "abc";
abstract class InterceptorsService {
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

  static initI18n() {
    i18n.use(initReactI18next).init({
      lng: "tr",
      resources: {
        en: { translation: en_US },
        tr: { translation: tr_TR }
      }
    });
  }

  static initWebVitals(onPerfEntry?: ReportCallback) {
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: InterceptorsService.initWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import("web-vitals").then(
        ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(onPerfEntry);
          getFID(onPerfEntry);
          getFCP(onPerfEntry);
          getLCP(onPerfEntry);
          getTTFB(onPerfEntry);
        }
      );
    }
  }
}

export default InterceptorsService;
