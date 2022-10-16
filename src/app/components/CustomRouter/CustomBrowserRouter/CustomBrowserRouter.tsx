import React from "react";
import { BrowserHistory } from "history";
import { Router } from "react-router-dom";

interface CustomRouterProps {
  basename?: string;
  children?: React.ReactNode;
  history: BrowserHistory;
}

const CustomBrowserRouter = ({
  basename,
  children,
  history
}: CustomRouterProps) => {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
};

export default CustomBrowserRouter;
