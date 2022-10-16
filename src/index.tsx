import React from "react";
import { createRoot } from "react-dom/client";
import InterceptorsService from "@services/Interceptors.service";
import App from "app/App";

const renderApp = () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(<App />);
};

const bootstrap = async () => {
  InterceptorsService.registerAxiosInterceptors();
  InterceptorsService.registerMonitoringTools();
  InterceptorsService.initI18n();
  renderApp();
};

bootstrap();
