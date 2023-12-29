"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Mail20Filled } from "@fluentui/react-icons";
import Loginpop from "../login/Loginpop";
import { useUser } from "@/lib/store/user";
import Profile from "./profile";

const Navbar: React.FC = () => {
  const user = useUser((state) => state.user);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      setIsTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <nav
      className={`sticky top-0 bg-white/60 dark:bg-neutral-900/60 
      backdrop-blur-2xl backdrop-filter border-b ${
        isTop ? "border-transparent" : "border-b"
      } delay-50 ease-linear transition-all z-50 `}
    >
      <div className=" max-w-7xl  flex items-center justify-between w-full py-3 mx-auto">
        <Link href="/">
          <Image
            width={25}
            height={55}
            src="/images/Logo_llamalab.webp"
            alt="Logo"
          />
        </Link>
        <ul className="flex space-x-5 items-center text-gray-400 ">
          <li>
            <a href="/precios" className="hover:text-primary">
              Precios
            </a>
          </li>
          <li>
            <a href="/nosotros" className="hover:text-primary">
              Nosotros
            </a>
          </li>
          <li>
            <a href="/integraciones" className="hover:text-primary">
              Integraciones
            </a>
          </li>
          <div className="self-center border-r border-slate-200 dark:border-secondary h-8"></div>
          {user?.id ? (
            <div>
              <Profile />
            </div>
          ) : (
            <Loginpop />
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
