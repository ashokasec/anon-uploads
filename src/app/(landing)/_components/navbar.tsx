import { DynamicThemeChanger } from "@/components/theme-changer/dynamic-theme-changer";
import { project } from "@/lib/config";
import { space_grotesk } from "@/lib/fonts";
import Link from "next/link";
import React from "react";
import SignIn from "./auth/sign-in-button";

const Navbar = () => {
  return (
    <header className="x-ash">
      <nav className="h-16 flex items-center justify-between leading-none">
        <Link
          href="/"
          style={space_grotesk.style}
          className="text-xl md:text-2xl font-extrabold"
        >
          {project.name.smallCase}
        </Link>
        <div className="flex items-center space-x-2">
          <DynamicThemeChanger />
          <SignIn />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
