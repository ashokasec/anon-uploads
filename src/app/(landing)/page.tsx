import React from "react";
import Navbar from "./_components/navbar";
import HeroInfo from "./_components/hero-info";
import ImageUpload from "./_components/image-upload";
import Gallery from "./_components/gallery";
import Footer from "./_components/footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <main className="x-ash space-y-12">
        <HeroInfo />
        <ImageUpload />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};

export default Page;
