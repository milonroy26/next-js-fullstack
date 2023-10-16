import Action from "@/components/Action";
import Blog from "@/components/BlogPageCmp/page";
import NewsLetter from "@/components/NewsLetter";
import React from "react";

const page = () => {
  return (
    <div>
      {/* blog section */}
      <Blog />
      {/* action section */}
      <Action />
      {/* news letter section */}
      <NewsLetter />
    </div>
  );
};

export default page;
