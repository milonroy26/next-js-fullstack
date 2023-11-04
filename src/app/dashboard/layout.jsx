import SideBar from "@/components/DashboardPageCmp/SideBar";

export default function Dashboard({ children }) {
  return (
    <>
      <SideBar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div>{children}</div>
      </div>
    </>
  );
}
