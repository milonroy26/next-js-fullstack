import DashboardMaster from "@/components/DashboardPageCmp/DashboardMaster";

export default function Dashboard({ children }) {
  return (
    <>
      <div>
        <DashboardMaster></DashboardMaster>
      </div>

      <div>{children}</div>
    </>
  );
}
