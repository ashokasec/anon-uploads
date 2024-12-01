import React from "react";
import Navbar from "./_components/navbar";
import HeroInfo from "./_components/hero-info";
import ImageUpload from "./_components/image-upload";
import Gallery from "./_components/gallery";
import Disclaimer from "./_components/disclaimer";

const Page = () => {
  return (
    <>
      <Disclaimer />
      <Navbar />
      <main className="x-ash space-y-12">
        <HeroInfo />
        <ImageUpload />
        <Gallery />
      </main>
    </>
  );
};

export default Page;
