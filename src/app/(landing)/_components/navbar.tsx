import { DynamicThemeChanger } from "@/components/theme-changer/dynamic-theme-changer";
import { Button } from "@/components/ui/button";
import { project } from "@/lib/config";
import { space_grotesk } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

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
          <Link href={project.links.github} target="_blank">
            <Button variant={"link"} className="font-semibold">
              Contribute
            </Button>
          </Link>
          <DynamicThemeChanger />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
