import { TopbarNavLink } from "./topbar-nav-link";
import "./Topbar.css";

export const Topbar = (): JSX.Element => {

  return (
    <header className="main-layout-topbar">
      <h1>Conduit</h1>
      <nav className="main-layout-nav">
        <TopbarNavLink title={"Home"} to="/" />
        <TopbarNavLink title={"Sign in"} to="/login" buttonStyle/>
      </nav>
    </header>
  )
}