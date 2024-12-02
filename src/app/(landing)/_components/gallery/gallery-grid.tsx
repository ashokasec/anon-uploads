import React, { Suspense, useEffect } from "react";
import ImageCard from "./image-card";
import { listAllImagesOfLast24hrsAction } from "../../action";
import { useServerAction } from "zsa-react";
import { Skeleton } from "@/components/ui/skeleton";

const GalleryGridSkeleton = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 col-span-full">
      <Skeleton className="w-[calc(100%-2px)] aspect-square" />
      <Skeleton className="w-[calc(100%-2px)] aspect-square" />
      <Skeleton className="w-[calc(100%-2px)] aspect-square" />
      <Skeleton className="w-[calc(100%-2px)] aspect-square" />
    </div>
  );
};

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

const GalleryGrid = () => {
  const {
    execute,
    data: images,
    error,
    isPending,
    isSuccess,
  } = useServerAction(listAllImagesOfLast24hrsAction);

  useEffect(() => {
    execute();
  }, []);

  const renderContent = () => {
    if (isPending) return <GalleryGridSkeleton />;

    if (error) {
      return (
        <p className="text-red-600 text-center col-span-full">
          Oops! Something went wrong while loading images. Please try again
          later.
        </p>
      );
    }

    if (isSuccess) {
      if (images && images.length > 0) {
        return images.map((item, index) => (
          <ImageCard key={index} src={item.src} />
        ));
      } else {
        return <FallbackMessage />;
      }
    }

    return <GalleryGridSkeleton />;
  };

  return (
    <Suspense>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !mt-8 gap-2">
        {renderContent()}
      </div>
    </Suspense>
  );
};

export default GalleryGrid;
