import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Insight from "../../component/insight/insight";

function Homepage() {
  const navigate = useNavigate();

  return (
    <div>
      <Insight />
    </div>
  );
}

export default Homepage;
