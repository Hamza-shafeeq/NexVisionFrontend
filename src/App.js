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
import OnlineSocialProfileDetails from "./component/ArmorNet Pro details/PhoneLookupDetails/OnlineSocialProfileDetails.jsx";
import GeneralInfoDetails from "./component/ArmorNet Pro details/PhoneLookupDetails/General Info Details.jsx";
import EmailDetails from "./component/ArmorNet Pro details/Email Lookup Details/Email Details/EmailDetails.jsx";
import ValidityDetails from "./component/ArmorNet Pro details/Email Lookup Details/Validity Details/ValidityDetails.jsx";
import OnlineSocialProfilesDetails from "./component/ArmorNet Pro details/Email Lookup Details/Online Social Profiles Details/OnlineSocialProfilesDetails.jsx";
import DomainDetails from "./component/ArmorNet Pro details/Email Lookup Details/Domain Details/DomainDetails.jsx";
import ReputationDetails from "./component/ArmorNet Pro details/Email Lookup Details/Reputation Details/ReputationDetails.jsx";
import EmailGeneralInfoDetails from "./component/ArmorNet Pro details/Email Lookup Details/General Info Details/GeneralInfoDetails.jsx";
import Map from "./component/Global Shield Pro Details/Map/Map.jsx";
import General from "./component/KYCComplyPro Details/third party view details/generaldetails/general.jsx";
import Databreach from "./component/KYCComplyPro Details/third party view details/data breach/databreach.jsx";
import Companydetails from "./component/KYCComplyPro Details/third party view details/company registeries details/companydetails.jsx";
import Courtdetails from "./component/KYCComplyPro Details/third party view details/court details/courtdetails.jsx";
import DocumentDetails from "./component/KYCComplyPro Details/third party view details/Document Libraries details/DocumentDetails.jsx";
import PersonalDetails from "./component/KYCComplyPro Details/third party view details/Personal details/Personaldetails.jsx";
import PublicDetails from "./component/KYCComplyPro Details/third party view details/public details/Public.jsx";
import ProcurementDetails from "./component/KYCComplyPro Details/third party view details/Procurementdetails/ProcurementDetails.jsx";
import Gazettesdetails from "./component/KYCComplyPro Details/third party view details/Gazettes details/Gazettes.jsx";
import LandResgistry from "./component/KYCComplyPro Details/third party view details/Land Resgistry details/LandResgistry.jsx";
import AirRegisters from "./component/KYCComplyPro Details/third party view details/Air and Maritime Registers details/AirRegisters.jsx";
import LeaksDetails from "./component/KYCComplyPro Details/third party view details/leaks details/LeaksDetails.jsx";
import OrganizationGeneralDetails from "./component/KYCComplyPro Details/Organization Intelligence details/generaldetails/general.jsx";
import OrganizationProcurementDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Procurementdetails/ProcurementDetails.jsx";
import OrganizationSanctionsDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Sanctions details/SanctionsDetails.jsx";
import OrganizationGazettesDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Gazettes details/GazettesDetails.jsx";
import OrganizationGreyLiteratureDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Grey Literature details/GreyLiteratureDetails.jsx";
import OrganizationDocumentLibrariesDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Document Libraries Details/DocumentLibrariesDetails.jsx";
import OrganizationFinancialRecordsDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Financial Records Details/FinancialRecordsDetails.jsx";
import OrganizationPublicDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Public Details/PublicDetails.jsx";
import OrganizationCompanyRegistriesDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Company Registries Details/CompanyRegistriesDetails.jsx";
import OrganizationPersonOfInterestDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Person of Interest Details/PersonOfInterestDetails.jsx";
import OrganizationLicencesDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Licences and Concessions Details/LicencesDetails.jsx";
import OrganizationLeaksDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Leaks Details/LeaksDetails.jsx";
import OrganizationPublicSearchEngineDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Public Search Engine Details/PublicSearchDetails.jsx";
import OrganizationOSINTDetails from "./component/KYCComplyPro Details/Organization Intelligence details/OSINT Details/OSINTDetails.jsx";
import SanctionsDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Sanctions details/SanctionsDetails.jsx";
import PublicSearchDetails from "./component/KYCComplyPro Details/Organization Intelligence details/Public Search Engine Details/PublicSearchDetails.jsx";
import OsintDetails from "./component/KYCComplyPro Details/third party view details/OsintDetails/OsintDetails.jsx";
import Affirmdetails from "./component/KYCComplyPro Details/third party view details/Affirmdetails/Affirmdetails.jsx";
import Cardlockupdetails from "./component/KYCComplyPro Details/CardLockupDetails/Cardlockupdetails.jsx";

function App() {
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

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
        <Route path="/affirm-details" element={<Affirmdetails />}></Route>
        <Route path="/osint-details" element={<OsintDetails />}></Route>
        <Route path="/data-breach-details" element={<Databreach />}></Route>
        <Route
          path="/public-search-engine-details"
          element={<PublicSearchDetails />}
        ></Route>
        <Route
          path="/company-registries-details"
          element={<Companydetails />}
        ></Route>
        <Route
          path="/court-archives-details"
          element={<Courtdetails />}
        ></Route>
        <Route path="/leaks-details" element={<LeaksDetails />}></Route>
        <Route
          path="/document-libraries-details"
          element={<DocumentDetails />}
        ></Route>
        <Route
          path="/personal-info-details"
          element={<PersonalDetails />}
        ></Route>
        <Route path="/public-details" element={<PublicDetails />}></Route>
        <Route path="/sanctions-details" element={<SanctionsDetails />}></Route>
        <Route
          path="/procurement-details"
          element={<ProcurementDetails />}
        ></Route>
        <Route path="/gazettes-details" element={<Gazettesdetails />}></Route>
        <Route
          path="/land-registries-details"
          element={<LandResgistry />}
        ></Route>
        <Route
          path="/air-and-maritime-details"
          element={<AirRegisters />}
        ></Route>
        <Route
          path="/phone-lookup/online-social-profiles-details"
          element={<OnlineSocialProfileDetails />}
        ></Route>
        <Route
          path="/phone-lookup/general-info-details"
          element={<GeneralInfoDetails />}
        ></Route>
        <Route
          path="/email-lookup/email-details"
          element={<EmailDetails />}
        ></Route>
        <Route
          path="/email-lookup/validity-details"
          element={<ValidityDetails />}
        ></Route>
        <Route
          path="/email-lookup/online-social-profiles-details"
          element={<OnlineSocialProfilesDetails />}
        ></Route>
        <Route
          path="/email-lookup/domain-details"
          element={<DomainDetails />}
        ></Route>
        <Route
          path="/email-lookup/reputation-details"
          element={<ReputationDetails />}
        ></Route>
        <Route
          path="/email-lookup/general-info-details"
          element={<EmailGeneralInfoDetails />}
        ></Route>
        <Route
          path="/real-time-crisis/map"
          element={<Map Location={location} zoomLevel={17} />}
        ></Route>

        <Route
          path="/organization-intelligence/general-details"
          element={<OrganizationGeneralDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/procurement-details"
          element={<OrganizationProcurementDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/sanctions-details"
          element={<OrganizationSanctionsDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/gazettes-details"
          element={<OrganizationGazettesDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/grey-literature-details"
          element={<OrganizationGreyLiteratureDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/document-libraries-details"
          element={<OrganizationDocumentLibrariesDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/financial-records-details"
          element={<OrganizationFinancialRecordsDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/public-details"
          element={<OrganizationPublicDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/company-registries-details"
          element={<OrganizationCompanyRegistriesDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/person-of-interest-details"
          element={<OrganizationPersonOfInterestDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/licenses-and-concessions-details"
          element={<OrganizationLicencesDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/leaks-details"
          element={<OrganizationLeaksDetails />}
        ></Route>
        <Route
          path="/organization-intelligence/public-search-engine-details"
          element={<OrganizationPublicSearchEngineDetails />}
        ></Route>

        <Route
          path="/organization-intelligence/osint-details"
          element={<OrganizationOSINTDetails />}
        ></Route>
        <Route
          path="/cardlookupdetails"
          element={<Cardlockupdetails />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
