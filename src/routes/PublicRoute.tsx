import { useAuth } from "login/context";
import { Redirect, Route } from "react-router-dom";
import { RouteWrapperProps } from "./types";

export const PublicRoute = ({ path, component }: RouteWrapperProps): JSX.Element => {

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Redirect exact to="/" />;

  return <Route path={path} exact component={component} />;
}
