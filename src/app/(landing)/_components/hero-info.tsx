import { project } from "@/lib/config";
import { space_grotesk } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

const HeroInfo = () => {
  return (
    <section>
      <div className="mt-4 text-[15px] md:text-base text-gray-600">
        <h1
          style={space_grotesk.style}
          className="text-base md:text-lg leading-tight  font-semibold text-black mb-2"
        >
          Upload anything. Watch it live for 24 hours. Then? It&apos;s gone—no logs,
          no trace, no questions asked.
        </h1>
        <h2 className="inline">
          I don&apos;t care who you are or where you&apos;re from. Just upload
          your image.
        </h2>{" "}
        <p className="inline">
          It&apos;ll sit here for 24 hours, exposed for anyone who dares to
          look. No trackers, no logs, no rules—except one: don&apos;t upload
          anything illegal.
        </p>{" "}
        <br />
        <span className="flex flex-col md:flex-row md:items-end my-2 md:space-x-2">
          <span
            style={space_grotesk.style}
            className="text-base md:text-lg leading-tight  font-semibold text-black"
          >
            I don&apos;t wanted to end up in prison for your stupidity.
          </span>
          <span className="text-xs italic font-medium text-gray-200 mt-1 md:mt-0">
            ~ that good boy
          </span>
        </span>
        <p className="text-[15px] md:text-base ">
          The rest? Do whatever you want. Flowers, demons, lizards or that too
          😋 — I don&apos;t care.
        </p>
        <br />
        <p className="text-[15px] md:text-base">
          do you have any questions like,{" "}
          <Link
            href="/why-i-created-anon-uploads"
            className="underline text-gray-800 font-medium"
          >
            why i created this website
          </Link>{" "}
          or{" "}
          <Link
            href="/how-anon-uploads-works"
            className="underline text-gray-800 font-medium"
          >
            how {project.name.smallCase} works
          </Link>
        </p>
      </div>
    </section>
  );
};

export default HeroInfo;
