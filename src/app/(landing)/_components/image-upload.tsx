import { auth } from "@/server/auth";
import React from "react";
import UploadSection from "./image-upload/upload-section";
import UnauthenticatedUserFallback from "./image-upload/unauthenticated-user-fallback";

const ImageUpload = async () => {
  const session = await auth();
  return (
    <section>
      {!session ? <UnauthenticatedUserFallback /> : <UploadSection />}
    </section>
  );
};

export default ImageUpload;
