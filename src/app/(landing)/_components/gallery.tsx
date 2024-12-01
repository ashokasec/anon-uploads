import { inter, space_grotesk } from "@/lib/fonts";
import React from "react";
import Image from "next/image";
import { listAllImagesOfLast24hrsAction } from "../action";

const FallbackMessage = () => (
  <p className="text-gray-600 col-span-full flex flex-col border rounded-md items-center justify-center py-6 border-gray-300">
    <span className="text-lg font-semibold text-black">
      the anons have been silent for 24 hours
    </span>
    <span className="text-xs italic font-medium text-gray-200">
      no images uploaded in the last 24 hrs
    </span>
  </p>
);

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

const GalleryHeader = () => {
  return (
    <div>
      <h2 style={inter.style} className="text-2xl font-medium text-gray-500">
        see what the other{" "}
        <span className="font-extrabold text-black" style={space_grotesk.style}>
          anon
        </span>
        s{" "}
        <span className="font-extrabold text-black" style={space_grotesk.style}>
          uploads
        </span>
        ed
      </h2>
      <p className="text-xs italic font-medium text-gray-200">
        i know it&apos;s grammatically wrong, but it works{" "}
        <span className="text-[9px]">(◣_◢)┌П┐</span>
      </p>
    </div>
  );
};

const Gallery = async () => {
  const [images, error] = await listAllImagesOfLast24hrsAction();

  if (error) {
    return (
      <section className="space-y-12">
        <GalleryHeader />
        <p className="text-red-600 text-center">
          Oops! Something went wrong while loading images. Please try again
          later.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-12">
      <GalleryHeader />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !mt-8 gap-2">
        {images && images.length > 0 ? (
          images.map((item, index) => <ImageCard key={index} src={item.src} />)
        ) : (
          <FallbackMessage />
        )}
      </div>
    </section>
  );
};

export default Gallery;
