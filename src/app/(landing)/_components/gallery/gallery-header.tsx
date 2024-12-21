import { inter, space_grotesk } from "@/lib/fonts";
import React from "react";

const GalleryHeader = () => {
  return (
    <div>
      <h2
        style={inter.style}
        className="text-2xl font-medium text-gray-600 dark:text-gray-400"
      >
        <span
          className="font-extrabold text-black dark:text-gray-50"
          style={space_grotesk.style}
        >
          images uploaded in last 24 hrs
        </span>
      </h2>
    </div>
  );
};

export default GalleryHeader;
