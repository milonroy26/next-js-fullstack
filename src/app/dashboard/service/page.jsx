import ServiceHome from "@/components/DashboardPageCmp/ServiceHome";

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
export default async function Page() {
  const service = await readService();

  return (
    <div>
      <ServiceHome service={service} />
    </div>
  );
}
