import React from "react";
import { Route } from "react-router-dom";

export type RouteWrapperProps = {
  path: string;
  component: React.ComponentProps<typeof Route>["component"];
}