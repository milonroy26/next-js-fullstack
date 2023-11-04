import DashboardHome from "@/components/DashboardPageCmp/DashboardHome";

// fetch all blog and service
const readBlog = async () => {
  const res = await fetch("http://localhost:3000/api/dashboard/blog/read", {
    cache: "no-store",
  });
  const data = await res.json();

  if (res.ok) {
    return data["data"];
  } else {
    return [];
  }
};

const readService = async () => {
  const res = await fetch("http://localhost:3000/api/dashboard/service/read", {
    cache: "no-store",
  });
  const data = await res.json();

  if (res.ok) {
    return data["data"];
  } else {
    return [];
  }
};

const page = async () => {
  const blog = await readBlog();
  const service = await readService();
  return (
    <>
      <DashboardHome blog={blog} service={service} />
    </>
  );
};

export default page;
