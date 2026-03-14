import { ReactNode } from "react";
import "./MainLayout.css";
import { Topbar } from "./topbar";

type MainLayoutProps = { children: ReactNode }

export const MainLayout = ({ children }: MainLayoutProps): JSX.Element => {
  return (
    <div className="main-layout">
      <Topbar />
      {children}
    </div>
  )
}