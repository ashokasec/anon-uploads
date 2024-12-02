import { Button } from "@/components/ui/button";
import { creator, project } from "@/lib/config";
import { bricolage, space_grotesk } from "@/lib/fonts";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t mt-12 mb-2 md:mb-4">
      <div className="x-ash">
        <div className="py-8">
          <div className="col-span-full xl:col-span-2">
            <div
              style={space_grotesk.style}
              className="text-xl md:text-2xl font-extrabold"
            >
              {project.name.smallCase}
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              Upload anything. Watch it live for 24 hours. Then? It’s gone—no
              logs, no trace, no questions asked.
            </p>
            <p className="mt-3 text-sm" style={bricolage.style}>
              <span className="inline-flex space-x-2">
                <Link href={creator.socials.twitter}>
                  <Button
                    variant={"secondary"}
                    className="py-1.5 px-2 h-fit leading-none border border-transparent hover:border-gray-300"
                  >
                    x / twitter
                  </Button>
                </Link>
                <Link href={creator.socials.telegram}>
                  <Button
                    variant={"secondary"}
                    className="py-1.5 px-2 h-fit leading-none border border-transparent hover:border-gray-300"
                  >
                    telegram
                  </Button>
                </Link>
              </span>
              <span className="ml-1 text-gray-500">~ creator</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
