import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
// import Sidebar from "./component/sidebar/sidebar";
import "./App.css";
import KYCCardLookup from "./pages/KYCComply Pro/KYC Card Lookup/KYCCardLookup";
import KYCSanction from "./pages/KYCComply Pro/KYC Sanction check/KYCSanction";
import KYCThirdParty from "./pages/KYCComply Pro/KYC Thirdparty/KYCThirdParty";
import KYCOrganization from "./pages/KYCComply Pro/KYC Organization/KYCOrganization";
import InsightAi from "./pages/insight/insightAi";
import Otp from "./pages/otp/otp";
import BrandSentinel from "./pages/SocialScan Pro/Brand Sentinel/BrandSentinel";
import GSPRealTimeCrisis from "./pages/Global Shield Pro/Real Time Crisis/GSPRealTimeCrisis";
import GSGeopolitical from "./pages/Global Shield Pro/Geopolitical Intelligence/GSGeopolitical";
import ANPEmailLookup from "./pages/ArmorNet Pro/ANP Email Lookup/ANPEmailLookup";
import ANPPhoneLookup from "./pages/ArmorNet Pro/ANP Phone Lookup/ANPPhoneLookup";
import DHPDarknet from "./pages/Detectivehub Pro/DHP Darknet/DHPDarknet";
import DHPDiscovery from "./pages/Detectivehub Pro/DHP Discovery/DHPDiscovery";
import General from "./component/generaldetails/general.jsx";
import OnlineSocialProfileDetails from "./component/ArmorNet Pro details/PhoneLookupDetails/OnlineSocialProfileDetails.jsx";
import GeneralInfoDetails from "./component/ArmorNet Pro details/PhoneLookupDetails/General Info Details.jsx";
import EmailDetails from "./component/ArmorNet Pro details/Email Lookup Details/Email Details/EmailDetails.jsx";
import ValidityDetails from "./component/ArmorNet Pro details/Email Lookup Details/Validity Details/ValidityDetails.jsx";
import OnlineSocialProfilesDetails from "./component/ArmorNet Pro details/Email Lookup Details/Online Social Profiles Details/OnlineSocialProfilesDetails.jsx";
import DomainDetails from "./component/ArmorNet Pro details/Email Lookup Details/Domain Details/DomainDetails.jsx";
import ReputationDetails from "./component/ArmorNet Pro details/Email Lookup Details/Reputation Details/ReputationDetails.jsx";
import EmailGeneralInfoDetails from "./component/ArmorNet Pro details/Email Lookup Details/General Info Details/GeneralInfoDetails.jsx"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/kyc-card-lookup" element={<KYCCardLookup />}></Route>
        <Route path="/kyc-sanction-check" element={<KYCSanction />}></Route>
        <Route path="/kyc-third-party" element={<KYCThirdParty />}></Route>
        <Route path="/kyc-organization" element={<KYCOrganization />}></Route>
        <Route path="/insightAi" element={<InsightAi />}></Route>
        <Route path="/otp" element={<Otp />}></Route>
        <Route path="/real-time-crisis" element={<GSPRealTimeCrisis />}></Route>
        <Route
          path="/geopolitical-intelligence"
          element={<GSGeopolitical />}
        ></Route>
        <Route path="/email-lookup" element={<ANPEmailLookup />}></Route>
        <Route path="/phone-lookup" element={<ANPPhoneLookup />}></Route>
        <Route path="/darknet" element={<DHPDarknet />}></Route>
        <Route path="/discovery" element={<DHPDiscovery />}></Route>
        <Route path="/brand-sentinel" element={<BrandSentinel />}></Route>
        <Route path="/general-info-details" element={<General />}></Route>
        <Route path="/affirm-details" element={<General />}></Route>
        <Route path="/osint-details" element={<General />}></Route>
        <Route path="/data-breach-details" element={<General />}></Route>
        <Route
          path="/public-search-engine-details"
          element={<General />}
        ></Route>
        <Route path="/company-registries-details" element={<General />}></Route>
        <Route path="/court-archives-details" element={<General />}></Route>
        <Route path="/leaks-details" element={<General />}></Route>
        <Route path="/document-libraries-details" element={<General />}></Route>
        <Route path="/personal-info-details" element={<General />}></Route>
        <Route path="/public-details" element={<General />}></Route>
        <Route path="/sanctions-details" element={<General />}></Route>
        <Route path="/procurement-details" element={<General />}></Route>
        <Route path="/gazettes-details" element={<General />}></Route>
        <Route path="/land-registries-details" element={<General />}></Route>
        <Route path="/air-and-maritime-details" element={<General />}></Route>
        <Route
          path="/phone-lookup/online-social-profiles-details"
          element={<OnlineSocialProfileDetails />}
        ></Route>
         <Route
          path="/phone-lookup/general-info-details"
          element={<GeneralInfoDetails  />}
        ></Route>
        <Route path="/email-lookup/email-details" element={<EmailDetails />}></Route>
        <Route path="/email-lookup/validity-details" element={<ValidityDetails />}></Route>
        <Route path="/email-lookup/online-social-profiles-details" element={<OnlineSocialProfilesDetails />}></Route>
        <Route path="/email-lookup/domain-details" element={<DomainDetails />}></Route>
        <Route path="/email-lookup/reputation-details" element={<ReputationDetails />}></Route>
        <Route path="/email-lookup/general-info-details" element={<EmailGeneralInfoDetails />}></Route>






      </Routes>
    </BrowserRouter>
  );
}

export default App;
