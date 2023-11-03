import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Admin/adminPortal/navbar";

const AdminDashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default AdminDashboardLayout;
