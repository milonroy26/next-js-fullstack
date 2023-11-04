import BlogHome from "@/components/DashboardPageCmp/BlogHome";

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
export default async function Page() {
  const blog = await readBlog();
  return (
    <div>
      <BlogHome blog={blog} />
    </div>
  );
}
