import React, { useContext, useEffect, createContext } from "react";
import NavItem from "./NavItem";
import NavGroup from "./NavGroup";
import { IDynamicNavContext, IDynamicRoute } from "./DynamicNav.model";
import { AppContext } from "app/AppContext";

interface DynamicNavProps {
  onRouteClick: () => void;
}

export const DynamicNavContext = createContext<IDynamicNavContext>(
  {} as IDynamicNavContext
);
const DynamicNav = (props: DynamicNavProps): JSX.Element => {
  const { onRouteClick } = props;
  const [activeNavGroup, setActiveNavGroup] = React.useState<string>();
  const { routes } = useContext(AppContext);

  useEffect(() => {
    const activeRoute = routes.find(
      (route) =>
        route.subRoutes &&
        route.subRoutes.find((subRoute) => isActiveRoute(subRoute.path))
    );
    if (activeRoute) {
      setActiveNavGroup(activeRoute.name);
    }
  }, []);

  const isActiveRoute = (route: string) => location.pathname === route;

  const onNavItemClick = (route: IDynamicRoute): void => {
    if (route.subRoutes) {
      setActiveNavGroup(activeNavGroup === route.name ? undefined : route.name);
    } else onRouteClick();
  };

  return (
    <DynamicNavContext.Provider value={{ activeNavGroup, onNavItemClick }}>
      {routes.map((route, index) =>
        route.subRoutes ? (
          <NavGroup key={index} route={route} />
        ) : (
          <NavItem key={index} route={route} />
        )
      )}
    </DynamicNavContext.Provider>
  );
};

export default DynamicNav;
