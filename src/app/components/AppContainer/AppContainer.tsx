import {
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import clsx from "clsx";
import React from "react";
import { FaChevronLeft, FaSignOutAlt, FaBars, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import AuthService from "@views/Login/services/Auth.service";
import useStyles from "./style";
import APP_CONSTANT from "@constants/app.constant";
import DynamicNav from "@components/DynamicNav/DynamicNav";

const AppContainer = ({
  component: Component
}: {
  component: React.ReactNode;
}): JSX.Element => {
  const location = useLocation();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const isActiveRoute = (route: string) => location.pathname === route;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <FaBars />
          </IconButton>
          <Typography variant="h6" noWrap>
            {APP_CONSTANT.APP_NAME}
          </Typography>
          <div className={classes.gap}></div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={() => setOpen(false)}>
            <FaChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            className={isActiveRoute("/") ? classes.active : ""}
          >
            <Tooltip title="Home">
              <ListItemIcon>
                <FaHome />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <Divider />
        <DynamicNav onRouteClick={() => setOpen(false)} />
        <Divider />
        <List>
          <ListItem button onClick={AuthService.logout}>
            <Tooltip title="Logout">
              <ListItemIcon>
                <FaSignOutAlt />
              </ListItemIcon>
            </Tooltip>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      {Component}
    </div>
  );
};

export default AppContainer;
