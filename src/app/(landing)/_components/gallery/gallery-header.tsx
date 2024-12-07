import { inter, space_grotesk } from '@/lib/fonts';
import React from 'react'


const GalleryHeader = () => {
    return (
      <div>
        <h2 style={inter.style} className="text-2xl font-medium text-gray-600 dark:text-gray-400">
          see what the other{" "}
          <span className="font-extrabold text-black dark:text-gray-50" style={space_grotesk.style}>
            anon
          </span>
          s{" "}
          <span className="font-extrabold text-black dark:text-gray-50" style={space_grotesk.style}>
            uploads
          </span>
          ed
        </h2>
        <p className="text-xs italic font-medium text-gray-200 dark:text-gray-700">
          i know it&apos;s grammatically wrong, but it works{" "}
          <span className="text-[9px]">(◣_◢)┌П┐</span>
        </p>
      </div>
    );
  };

export default GalleryHeader