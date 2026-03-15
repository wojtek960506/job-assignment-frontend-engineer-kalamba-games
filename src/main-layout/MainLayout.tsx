import { ReactNode } from "react";
import "./MainLayout.css";
import { Topbar } from "./topbar";
import { Footer } from "./footer";

type MainLayoutProps = { children: ReactNode }

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div className="main-layout">
      <Topbar />
      <div className="main-layout-content">{children}</div>
      <Footer />
    </div>
  )
}