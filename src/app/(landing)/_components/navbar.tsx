import { Button } from "@/components/ui/button";
import { creator } from "@/lib/config";
import { space_grotesk } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="x-ash">
      <nav className="h-16 flex items-center justify-between leading-none">
        <div style={space_grotesk.style} className="text-2xl font-extrabold">
          anon uploads
        </div>
        <div className="flex items-center justify-between">
          <Link href={creator.socials.twitter} target="_blank">
            <Button variant={"outline"} className="font-semibold">
              Creator lives here
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
