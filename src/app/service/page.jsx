import Action from "@/components/Action";
import Price from "@/components/ServicePageCmp/Price";
import Service from "@/components/ServicePageCmp/Service";
import React from "react";

const page = () => {
  return (
    <>
      {/* service section */}
      <Service />
      {/* price section */}
      <Price />
      {/* action section */}
      <Action />
    </>
  );
};

export default page;
