import React from "react";
import Sidebar from "../component/sidebar/sidebar";

function applayout() {
  return (
    <div>
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default applayout;
