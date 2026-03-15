import { useAuth } from "login/context";
import { Redirect, Route } from "react-router-dom";
import { RouteWrapperProps } from "./types";

export const ProtectedRoute = ({ path, component }: RouteWrapperProps): JSX.Element => {

  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Redirect exact to="/login" />;

  return <Route path={path} exact component={component} />;
}
