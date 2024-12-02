"use client";

import React, { useState } from "react";
import GalleryHeader from "./gallery/gallery-header";
import GalleryGrid from "./gallery/gallery-grid";
import Disclaimer from "./disclaimer";

const Gallery = () => {
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(false);
  return (
    <section className="space-y-12">
      <Disclaimer
        isDisclaimerVisible={isDisclaimerVisible}
        setIsDisclaimerVisible={setIsDisclaimerVisible}
      />
      <GalleryHeader />
      <GalleryGrid />
    </section>
  );
};

export default Gallery;
