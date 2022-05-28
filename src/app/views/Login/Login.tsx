import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { FaSpinner } from "react-icons/fa";
import AuthService from "./services/AuthService";
import APP_CONSTANTS from "@constants/app-constants";
import { history } from "../../../index";
import "./style.scss";

const Login = (): JSX.Element => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const login = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    AuthService.login(user.email, user.password)
      .then(() => {
        history.push(localStorage.getItem("route") || "/");
      })
      .catch(() => {
        setError(true);
        setTimeout(() => setError(false), 5000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login-wrapper">
      <div className="login-bg"></div>
      <div className="login-content">
        <div className="blurred-box"></div>
        <div className="login-title">
          <Typography variant="h4">Welcome</Typography>
          <Typography variant="h6">{APP_CONSTANTS.APP_NAME}</Typography>
        </div>
        <div className="login-form">
          <Typography variant="h4">Giriş</Typography>
          <form onSubmit={login}>
            <TextField
              value={user.email}
              onChange={(e) => {
                user.email = e.target.value;
                setUser({ ...user });
              }}
              type="text"
              label="Email"
              fullWidth
              variant="filled"
              placeholder="Email adresinizi giriniz"
              required
            ></TextField>
            <TextField
              value={user.password}
              onChange={(e) => {
                user.password = e.target.value;
                setUser({ ...user });
              }}
              type="password"
              label="Parola"
              fullWidth
              variant="filled"
              placeholder="Parolanızı giriniz"
              required
            ></TextField>
            {error && (
              <Typography variant="caption" className="error">
                Email ya da parola yanlış, tekrar deneyin.
              </Typography>
            )}
            <div className="login-btn">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading && <FaSpinner className="icon-spin" />}&nbsp;Giriş
              </Button>
            </div>
          </form>
        </div>
        <div className="login-footer">
          <img src={require(`@assets/img/logo/logo.png`)} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Login;
