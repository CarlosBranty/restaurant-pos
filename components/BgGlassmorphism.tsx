"use client";
import React, { FC, useState } from "react";

export interface BgGlassmorphismProps {
  className?: string;
}

const BgGlassmorphism: FC<BgGlassmorphismProps> = ({
  className = "absolute inset-x-0 md:top-10 xl:top-40 min-h-0 pl-20 py-36 flex overflow-hidden z-0 ",
}) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMouseX(event.clientX / 20);
    setMouseY(event.clientY / 20);
  };

  return (
    <div className={` ${className}`} onMouseMove={handleMouseMove}>
      <span
        className="block  bg-[#ef233c] w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-76 lg:h-76"
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      ></span>
      <span
        className="block  bg-[#04868b] w-72 h-72 -ml-20 mt-40 rounded-full mix-blend-multiply filter blur-3xl opacity-10 lg:w-76 lg:h-76 nc-animation-delay-3000"
        style={{ transform: `translate(${mouseX}px, ${mouseY}px)` }}
      ></span>
    </div>
  );
};

export default BgGlassmorphism;
