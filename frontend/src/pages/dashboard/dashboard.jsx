import React from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import Mainfordash from "../../components/compfordashboard/mainfordash";

const Dashboard = () => {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Mainfordash />
    </DashboardLayout>
  );
};

export default Dashboard;
