import { Button } from "ui/button";
import { TopbarNavLink } from "./topbar-nav-link";
import "./Topbar.css";
import { useAuth } from "login/context";

export const Topbar = (): JSX.Element => {
  const { isAuthenticated, resetAuthToken } = useAuth();

  return (
    <header className="main-layout-topbar">
      <h1>Conduit</h1>
      <nav className="main-layout-nav">
        <TopbarNavLink title="Home" to="/" />
        {isAuthenticated 
          ? <Button onClick={() => resetAuthToken()} variant="primary">Log out</Button>
          : <TopbarNavLink title="Sign in" to="/login" buttonStyle/>}

      </nav>
    </header>
  )
}