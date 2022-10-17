import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IDynamicRoute } from "./DynamicNav.model";
import { DynamicNavContext } from "./DynamicNav";

interface NavItemProps {
  className?: string;
  route: IDynamicRoute;
}

const NavItem = ({ className, route }: NavItemProps): JSX.Element => {
  const { activeNavGroup, onNavItemClick } = useContext(DynamicNavContext);

  const isActiveRoute = (route: string) => location.pathname === route;

  return (
    <ListItem
      hidden={route.hidden}
      button
      component={route.path ? Link : "div"}
      onClick={() => onNavItemClick(route)}
      to={route.path}
      className={`${
        isActiveRoute(route.path) && "active-nav-item"
      } ${className}`}
    >
      <Tooltip title={route.name} placement="right">
        <ListItemIcon>{route.icon}</ListItemIcon>
      </Tooltip>
      <ListItemText primary={route.name} />
      {route.subRoutes &&
        (activeNavGroup === route.name ? <FaCaretDown /> : <FaCaretUp />)}
    </ListItem>
  );
};
export default NavItem;
