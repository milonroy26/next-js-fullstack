import Action from "@/components/Action";
import BlogPage from "@/components/BlogPageCmp/BlogPage";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import { PrismaClient } from "@prisma/client";
import React from "react";

const getData = async () => {
  const prisma = new PrismaClient();
  const blog = await prisma.blog.findMany({
    orderBy: { id: "desc" },
  })
  return blog;
}

const page = async () => {
  const blog = await getData();
  return (
    <div>
      <Header />
      {/* blog section */}
      <BlogPage blog={blog} />
      {/* action section */}
      <Action />
      {/* news letter section */}
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default page;
