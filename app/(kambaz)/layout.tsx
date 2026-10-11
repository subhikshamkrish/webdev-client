import { ReactNode } from "react";
import "./kambaz.css";
import KambazNavigation from "./Navigation";

export default function KambazLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div id="wd-kambaz" className="font-sans">
      <div className="flex">
        <KambazNavigation />
        <div className="wd-main-content-offset min-w-0 flex-1 p-3">{children}</div>
      </div>
    </div>
  );
}
