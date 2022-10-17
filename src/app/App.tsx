import React, { useState, useEffect, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { createBrowserHistory } from "history";
import i18n from "i18next";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import CustomBrowserRouter from "@components/CustomRouter/CustomBrowserRouter/CustomBrowserRouter";
import PrivateRoute from "@components/CustomRouter/PrivateRoute/PrivateRoute";
import eventEmitter, { EVENT_TOPICS } from "@services/EventEmitter.service";
import { IDynamicRoute } from "@components/DynamicNav/DynamicNav.model";
import { AppContextProvider } from "./AppContext";
import Login from "@views/Login/Login";
import Home from "@views/Home/Home";
import "./App.scss";

export const history = createBrowserHistory();
const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", '"Helvetica Neue"', "Arial", "sans-serif"].join(",")
  }
});

const App = (): JSX.Element => {
  const [routes, setRoutes] = useState<IDynamicRoute[]>([]);

  useEffect(() => {
    eventEmitter.on(EVENT_TOPICS.MODULE_INJECTED, onModuleInjected);
    return () => {
      eventEmitter.off(EVENT_TOPICS.MODULE_INJECTED, onModuleInjected);
    };
  }, []);

  const onModuleInjected = (moduleRoutes: IDynamicRoute[]) =>
    setRoutes([...routes, ...moduleRoutes]);

  useEffect(() => {
    history.listen((location) => {
      const pathname = (location as typeof location & { pathname: string })
        .pathname;
      if (pathname !== "/login") localStorage.setItem("route", pathname);
    });
  }, []);

  const renderDynamicRoutes = () => {
    return routes.map((route) => {
      const LazyComponent = route.component;
      return (
        <Route
          key={route.path}
          path={route.path}
          element={<PrivateRoute component={<LazyComponent />} />}
        />
      );
    });
  };

  return (
    <Suspense fallback={<div>{i18n.t<string>("common.loading")}... </div>}>
      <ThemeProvider theme={theme}>
        <AppContextProvider routes={routes}>
          <CustomBrowserRouter history={history}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<PrivateRoute component={<Home />} />} />
              {renderDynamicRoutes()}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </CustomBrowserRouter>
        </AppContextProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
