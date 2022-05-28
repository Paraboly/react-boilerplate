import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { createBrowserHistory } from "history";
import { Navigate, Route, Routes } from "react-router";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
import CustomBrowserRouter from "@components/CustomBrowserRouter/CustomBrowserRouter";
import PrivateRoute from "@components/PrivateRoute/PrivateRoute";
import InterceptersService from "@services/InterceptorsService";

import Home from "./app/views/Home/Home";
import Login from "./app/views/Login/Login";
import "./global.scss";

export const history = createBrowserHistory();

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", '"Helvetica Neue"', "Arial", "sans-serif"].join(",")
  }
});

const renderUI = () => {
  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);
  root.render(
    <Suspense fallback={<div>Loading... </div>}>
      <ThemeProvider theme={theme}>
        <CustomBrowserRouter history={history}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute component={Home} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </CustomBrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};

const bootstrap = async () => {
  InterceptersService.registerAxiosInterceptors();
  history.listen((location) => {
    const pathname = (location as typeof location & { pathname: string })
      .pathname;
    if (pathname !== "/login") localStorage.setItem("route", pathname);
  });

  LogRocket.init("dktpnn/safetr");
  setupLogRocketReact(LogRocket);
  renderUI();
};

bootstrap();
