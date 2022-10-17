import React, { useEffect, createContext } from "react";
import { IDynamicRoute } from "@components/DynamicNav/DynamicNav.model";
import ModuleInjector from "@services/ModuleInjector";

export interface IAppContext {
  routes: IDynamicRoute[];
}

export const AppContext = createContext<IAppContext>({
  routes: []
});

interface AppContextProviderProps {
  children: React.ReactNode;
  routes: IDynamicRoute[];
}
export const AppContextProvider = ({
  children,
  routes
}: AppContextProviderProps) => {
  useEffect(() => {
    const modules = ["test"];
    ModuleInjector.inject(modules);
  }, []);

  return (
    <AppContext.Provider value={{ routes }}>{children}</AppContext.Provider>
  );
};
