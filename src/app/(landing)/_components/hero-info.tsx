import { space_grotesk } from "@/lib/fonts";
import Link from "next/link";
import React from "react";

const HeroInfo = () => {
  return (
    <section>
      <p className="mt-4 text-gray-600">
        I don&apos;t care who you are or where you&apos;re from. Just upload
        your image. It&apos;ll sit here for 24 hours, exposed for anyone who
        dares to look. No trackers, no logs, no rules—except one: don&apos;t
        upload anything illegal. <br />
        <span className="flex items-end my-2 space-x-2">
          <span
            style={space_grotesk.style}
            className="text-lg font-semibold text-black"
          >
            I don&apos;t wanted to end up in prison for your stupidity.
          </span>
          <span className="text-xs italic font-medium text-gray-200">
            ~ that good boy
          </span>
        </span>
        The rest? Do whatever you want. Flowers, demons, lizards or that too 😋
        — I don&apos;t care.
        <br />
        <br />
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
          how anon uploads works
        </Link>
      </p>
    </section>
  );
};

export default HeroInfo;
