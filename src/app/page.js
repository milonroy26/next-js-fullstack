import React from "react";
import Hero from "./components/HomePageCmp/Hero";
import Feature from "./components/HomePageCmp/Feature";
import HowItWork from "./components/HomePageCmp/HowItWork";
import NewsLetter from "./components/NewsLetter";

const page = () => {
  return (
    <>
      {/* hero section */}
      <Hero />
      {/* Feature Section */}
      <Feature />
      {/*How It Work Section */}
      <HowItWork />
      {/* NewsLetter Section */}
      <NewsLetter />
    </>
  );
};

export default page;
