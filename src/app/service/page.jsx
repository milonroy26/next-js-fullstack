import Action from "@/components/Action";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Price from "@/components/ServicePageCmp/Price";
import Service from "@/components/ServicePageCmp/Service";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
      {/* service section */}
      <Service />
      {/* price section */}
      <Price />
      {/* action section */}
      <Action />
      <Footer />
    </>
  );
};

export default page;
