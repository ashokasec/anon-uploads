// Parent "../gallery" Using "use client" directive

import React, { Suspense, useEffect, useState } from "react";
import ImageCard from "./image-card";
import { listAllImagesOfLast24hrsAction } from "../../action";
import { useServerAction } from "zsa-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { env } from "@/lib/env";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "sonner";

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

const ImageModal = () => {
  const searchParams = useSearchParams();
  const [imageKey, setImageKey] = useState<string | null>(null);

  useEffect(() => {
    const key = searchParams.get("key");
    setImageKey(key);
  }, [searchParams]);

  function handleShare() {
    navigator.clipboard.writeText(
      `${env.NEXT_PUBLIC_APP_URL}/?key=${imageKey}`
    );
    toast("Image URL Copied to Clipboard");
  }

  return (
    imageKey && (
      <Dialog
        open={!!imageKey}
        onOpenChange={(isOpen) => !isOpen && setImageKey(null)}
      >
        <DialogContent showCloseButton={false}>
          <DialogHeader className="sr-only w-0">
            <DialogTitle>Image Preview</DialogTitle>
            <DialogDescription>
              View the selected image below:
            </DialogDescription>
          </DialogHeader>
          <div className="relative w-full h-96">
            <Image
              src={`https://${env.NEXT_PUBLIC_CLOUDFRONT_DOMAIN}/images/${imageKey}`}
              fill
              alt="Uploaded image"
              className="object-cover"
              loading="lazy"
            />
          </div>
          <DialogFooter className="flex-row justify-end sm:justify-end items-end space-x-2">
            <DialogClose asChild>
              <Link href="/" className="max-w-fit">
                <Button type="button" variant="secondary">
                  Close
                </Button>
              </Link>
            </DialogClose>
            <Button type="button" onClick={() => handleShare()}>
              Share
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  );
};

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
      <ImageModal />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 !mt-8 gap-2">
        {renderContent()}
      </div>
    </Suspense>
  );
};

export default GalleryGrid;
