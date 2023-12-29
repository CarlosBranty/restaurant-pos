import Loginpop from "@/components/login/Loginpop";
import { Button } from "@/components/ui/button";
import React from "react";
import SectionHero from "./(server-components)/SectionHero";
import Navbar from "@/components/nav/Navbat";

export default function page() {
  return (
    <div>
      {" "}
      <Navbar />
      <SectionHero />{" "}
    </div>
  );
}
