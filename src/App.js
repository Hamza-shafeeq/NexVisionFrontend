import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
// import Sidebar from "./component/sidebar/sidebar";
import "./App.css";
import KYCCardLookup from "./pages/KYCComply Pro/KYC Card Lookup/KYCCardLookup";
import KYCSanction from "./pages/KYCComply Pro/KYC Sanction check/KYCSanction";
import KYCThirdParty from "./pages/KYCComply Pro/KYC Thirdparty/KYCThirdParty";
import KYCOrganization from "./pages/KYCComply Pro/KYC Organization/KYCOrganization";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/kyc-card-lookup" element={<KYCCardLookup />}></Route>
        <Route path="/kyc-sanction-check" element={<KYCSanction />}></Route>
        <Route path="/kyc-third-party" element={<KYCThirdParty />}></Route>
        <Route path="/kyc-organization" element={<KYCOrganization />}></Route>




      </Routes>
    </BrowserRouter>
  );
}

export default App;
