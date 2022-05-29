import React from "react";
import { createRoot } from "react-dom/client";
import InterceptersService from "@services/InterceptorsService";
import App from "app/App";

const renderApp = () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(<App />);
};

const bootstrap = async () => {
  InterceptersService.registerAxiosInterceptors();
  InterceptersService.registerMonitoringTools();
  renderApp();
};

bootstrap();
