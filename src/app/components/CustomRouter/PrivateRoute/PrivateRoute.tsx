import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AppContainer from "@components/AppContainer/AppContainer";
import AuthService from "@views/Login/services/Auth.service";

interface PrivateRouteParams {
  component: React.ReactNode;
}

const PrivateRoute = ({
  component: Component
}: PrivateRouteParams): React.ReactElement => {
  const location = useLocation();

  return AuthService.isLoggedIn() ? (
    <AppContainer component={Component} />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoute;
