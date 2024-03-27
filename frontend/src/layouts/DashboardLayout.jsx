import Navfordash from "../components/compfordashboard/navfordash";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        {/* Side Navigation Bar */}
        <Navfordash />
        <main className="grow">{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
