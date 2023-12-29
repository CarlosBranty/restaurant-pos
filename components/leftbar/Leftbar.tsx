"use client";
import React, {
  HtmlHTMLAttributes,
  ReactHTMLElement,
  ReactNode,
  ReactPropTypes,
  ReactSVGElement,
  createContext,
  useContext,
} from "react";
import { Button } from "../ui/button";
import {
  IconDirectionContextValue,
  LockClosedKey24Regular,
} from "@fluentui/react-icons";
import Profile from "../nav/profile";
import Loginpop from "../login/Loginpop";
import { useUser } from "@/lib/store/user";

interface SidebarContextType {
  expanded: boolean;
}
// const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

interface LeftbarProps {
  children: ReactNode;
}

const Leftbar = ({ children }: LeftbarProps) => {
  const user = useUser((state) => state.user);
  return (
    <aside className=" w-16 h-screen px-2 rounded-sm">
      <div className="bg-card flex flex-col items-center h-full w-full rounded-lg">
        <div className="h-full flex flex-col justify-between my-4">
          <div className="w-10 flex self-center">
            {user?.id ? (
              <div>
                <Profile />
              </div>
            ) : (
              <Loginpop />
            )}
          </div>
          <nav className="flex flex-col gap-2 px-2">{children}</nav>
          <div className="p-4"></div>
        </div>
      </div>
    </aside>
  );
};

export default Leftbar;

interface LeftbarItemProps {
  icon: ReactNode;
  text: string;
  active?: boolean;
}

export function LeftbarItem({ icon, text, active }: LeftbarItemProps) {
  return (
    <li
      className={`relative flex items-center justify-center py-2 px-2 font-medium rounded-md cursor-pointer transition-colors
      ${active ? "bg-primary" : "hover:bg-primary"} group`}
    >
      {icon}
      {
        <div
          className={`absolute left-full rounded-lg px-2 py-1 ml-6
      bg-secondary invisible opacity-20 -translate-x-3 transition-all group-hover:visible
      group-hover:opacity-100 group-hover:translate-x-0 `}
        >
          {text}
        </div>
      }
    </li>
  );
}
