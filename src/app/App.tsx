import React, { useEffect, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { createBrowserHistory } from "history";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import PrivateRoute from "@components/CustomRouter/PrivateRoute/PrivateRoute";
import CustomBrowserRouter from "@components/CustomRouter/CustomBrowserRouter/CustomBrowserRouter";
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
  useEffect(() => {
    history.listen((location) => {
      const pathname = (location as typeof location & { pathname: string })
        .pathname;
      if (pathname !== "/login") localStorage.setItem("route", pathname);
    });
  }, []);

  return (
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

export default App;
