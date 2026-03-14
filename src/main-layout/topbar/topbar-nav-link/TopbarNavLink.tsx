import { NavLink } from "react-router-dom"

import "./TopbarNavLink.css";

type TopbarNavLinkProps = {
  title: string;
  to: string,
  buttonStyle?: boolean;
}

export const TopbarNavLink = ({
  title,
  to,
  buttonStyle,
}: TopbarNavLinkProps): JSX.Element => {
  return (
    <NavLink
      exact
      to={to}
      className={buttonStyle ? "nav-link-button" : "nav-link"}
      activeClassName={buttonStyle ? "nav-link-button-active" : "nav-link-active"}
    >
      {title}
    </NavLink>
  );
}
