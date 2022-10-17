export interface IDynamicRoute {
  name: string;
  icon: React.ReactElement;
  path?: string;
  component?: React.ComponentType;
  subRoutes?: IDynamicRoute[];
  hidden?: boolean;
}

export interface IDynamicNavContext {
  activeNavGroup: string;
  onNavItemClick: (route: IDynamicRoute) => void;
}
