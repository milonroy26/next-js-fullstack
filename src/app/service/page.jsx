import Action from "@/components/Action";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Price from "@/components/ServicePageCmp/Price";
import Service from "@/components/ServicePageCmp/Service";
import { PrismaClient } from "@prisma/client";
import React from "react";

const getData = async () => {
  const prisma = new PrismaClient();
  let service = await prisma.service.findMany({
    orderBy: { id: "desc" },
  });
  return service;
}
const page = async () => {
  const service = await getData();
  console.log(service)
  return (
    <>
      <Header />
      {/* service section */}
      <Service service={service} />
      {/* price section */}
      <Price />
      {/* action section */}
      <Action />
      <Footer />
    </>
  );
};

export default page;
