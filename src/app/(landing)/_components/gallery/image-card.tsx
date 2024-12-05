import Image from "next/image";
import React from "react";
import Link from "next/link";

function getImageKey(imageUrl: string) {
  return imageUrl.replace("https://d2gox21sq349ly.cloudfront.net/images/", "");
}

const ImageCard = ({ src }: { src: string }) => (
  <Link href={`/?key=${getImageKey(src)}`}>
    <div className="group">
      <div className="w-full aspect-square relative border-2 rounded-md overflow-clip transition-all border-transparent group-hover:border-blue-500">
        <Image
          src={src}
          fill
          alt="Uploaded image"
          className="object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </Link>
);

export default ImageCard;
