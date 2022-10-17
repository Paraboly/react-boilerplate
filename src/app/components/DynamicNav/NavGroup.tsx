import React, { useContext } from "react";
import { Collapse, List } from "@mui/material";
import { DynamicNavContext } from "./DynamicNav";
import { IDynamicRoute } from "./DynamicNav.model";
import NavItem from "./NavItem";

interface NavGroupProps {
  route: IDynamicRoute;
}
const NavGroup = ({ route }: NavGroupProps): JSX.Element => {
  const { activeNavGroup } = useContext(DynamicNavContext);
  return (
    <>
      <NavItem route={route} />
      <Collapse in={activeNavGroup === route.name} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {route.subRoutes?.map((subRoute, index) => (
            <NavItem className="nav-child" key={index} route={subRoute} />
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default NavGroup;
