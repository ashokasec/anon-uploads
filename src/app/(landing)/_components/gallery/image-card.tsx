import Image from "next/image";
import React from "react";

const ImageCard = ({ src }: { src: string }) => (
  <div className="group">
    <div className="w-full aspect-square relative border-2 rounded-md overflow-clip transition-all border-transparent group-hover:border-blue-500">
      <Image
        src={src}
        fill
        alt="Uploaded image"
        className="object-cover"
        loading="lazy" // Ensures lazy loading
      />
    </div>
  </div>
);

export default ImageCard;
