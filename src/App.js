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

import OsintDetails from "./component/KYCComplyPro Details/third party view details/OsintDetails/OsintDetails.jsx";
import Affirmdetails from "./component/KYCComplyPro Details/third party view details/Affirmdetails/Affirmdetails.jsx";
import Cardlockupdetails from "./component/KYCComplyPro Details/CardLockupDetails/Cardlockupdetails.jsx";
import PublicSearchDetailsBox from "./component/KYCComplyPro Details/third party view details/publicsearchDetails/PublicSearchDetails.jsx";
import SanctionsDetailsBox from "./component/KYCComplyPro Details/third party view details/sanctionsdetails/sanctions.jsx";
import GazettesDetailsBox from "./component/KYCComplyPro Details/third party view details/Gazettes details/Gazettes.jsx";
import DataSetsDetails from "./component/Detectivehubdetails/DataSetsDetails/DataSetsDetails.jsx";
import TypesDetails from "./component/Detectivehubdetails/TypesDetails/TypesDetails.jsx";
import LanguageDetailsBox from "./component/Detectivehubdetails/languagedetailsbox/LanguageDetailsBox.jsx";
import GeneraldataAdd from "./component/GeneralDataAdd/GeneraldataAdd.jsx";
import GeneralPersonalBox from "./component/Generalpersonalbox/GeneralPersonalBox.jsx";
import GeneralUserbox from "./component/Generaluserbox/GeneralUserbox.jsx";
import GeneralAccountbox from "./component/GeneralAccountbox/GeneralAccountbox.jsx";
import DiscoveryDatasetdetails from "./component/Detectivehubdetails/Discovery/DataSetsDetails/DataSetsDetails.jsx";
import DiscoveryTypesDetails from "./component/Detectivehubdetails/Discovery/Types/TypesDetails.jsx";
import DiscoveryCountriesDetails from "./component/Detectivehubdetails/Discovery/Countries Details/CountriesDetails.jsx";
import DiscoveryLanguagesDetails from "./component/Detectivehubdetails/Discovery/Languages Details/LanguagesDetails.jsx";
import DiscoveryEmailDetails from "./component/Detectivehubdetails/Discovery/Email Details/EmailDetails.jsx";
import DiscoveryPhoneDetails from "./component/Detectivehubdetails/Discovery/Phone Details/PhoneDetails.jsx";
import DiscoveryNameDetails from "./component/Detectivehubdetails/Discovery/Name Details/NameDetails.jsx";
import DiscoveryAddressDetails from "./component/Detectivehubdetails/Discovery/Address Details/AddressDetails.jsx";
import DiscoveryFileTypesDetails from "./component/Detectivehubdetails/Discovery/FileTypes Details/FileTypesDetails.jsx";
import GeneralImageResearch from "./component/GeneralImageresearch/GeneralImageResearch.jsx";
import GeneralSourceBox from "./component/GeneralSourcebox/GeneralSourceBox.jsx";
import GeneralSettingbox from "./component/GeneralSettingbox/GeneralSettingbox.jsx";
import TimelineDetails from "./component/BrandSentineldetails/Timelinedetails/TimelineDetails.jsx";
import MentionsDetails from "./component/BrandSentineldetails/Mentionsdetails/MentionsDetails.jsx";

import ECommerceDetails from "./component/BrandSentineldetails/ECommercedetails/ECommerceDetails.jsx";
import GenderDetails from "./component/BrandSentineldetails/Genderdetails/GenderDetails.jsx";
import SocialMediaDetails from "./component/BrandSentineldetails/Socialmediadetails/SocialMediaDetails.jsx";
import BrandLanguageDetails from "./component/BrandSentineldetails/Brandlanguagedetails/BrandLanguageDetails.jsx";
import SentimentDetails from "./component/BrandSentineldetails/Sentimentdetails/SentimentDetails.jsx";
import OrganizationIntelligenceBox from "./component/OrganizationintelligenceAddBox/OrganizationIntelligenceBox.jsx";
import OrganizationSourceBox from "./component/Organizationsourcebox/OrganizationSourceBox.jsx";
import OrganizationSocialBox from "./component/Organizationsocialbox/OrganizationSocialBox.jsx";
import OrganizationSourceCheck from "./component/Organizationsourcecheck/OrganizationSourceCheck.jsx";
import OrganizationSettingBox from "./component/Organizationsettingbox/OrganizationSettingBox.jsx";
import RealtimeAddBox from "./component/Realtimeaddbox/RealtimeAddBox.jsx";
import RealtimePrimaryBox from "./component/Realtimeprimarybox/RealtimePrimaryBox.jsx";
import RealtimeSettingBox from "./component/Realtimesettingbox/RealtimeSettingBox.jsx";
import RealtimeMapBox from "./component/Realtimemapbox/RealtimeMapBox.jsx";
import SocialMap from "./component/BrandSentineldetails/SocialMap/SocialMap.jsx";
import GeoForm from "./component/GeoForm/GeoForm.jsx";
import GeoPrimary from "./component/Geoprimary/GeoPrimaryBox.jsx";
import GeoSetting from "./component/GeoSetting/GeoSetting.jsx";
import GeoMap from "./component/GeoMap/GeoMap.jsx";
import GeoHashtag from "./component/GeoHashtag/GeoHashtag.jsx";
import BrandForm from "./component/BrandForm.jsx/BrandForm.jsx";
import PhoneLockupForm from "./component/PhoneLockupForm/PhoneLockupForm.jsx";
import EmailLockupForm from "./component/EmailLockupForm/EmailLockupForm.jsx";
import CardLockupForm from "./component/CardLockupForm/CardLockupForm.jsx";
import SanctionForm from "./component/SanctionForm/SanctionForm.jsx";

import DHPSurfaceCategory from "./pages/Detectivehub Pro/DHP Surface/DHPSurface.jsx";
import DHPCloudfile from "./pages/Detectivehub Pro/DHP Cloudfile/DHPCloudfile.jsx";
import DHPSurfaceCategoryDetails from "./component/Detectivehubdetails/Surface/Category Details/CategoryDetails.jsx";
import DHPSurfaceResultDetails from "./component/Detectivehubdetails/Surface/Result Details/ResultDetails.jsx";
import DHPCloudfileTaskDetails from "./component/Detectivehubdetails/Cloudfile/Task details/TaskDetails.jsx";
import DHPCloudfileNewLinksDetails from "./component/Detectivehubdetails/Cloudfile/Newlinks details/NewlinksDetails.jsx";

import PostsmadeDetails from "./component/BrandSentineldetails/Postsmade details/PostsmadeDetails.jsx";
import UserTalkingDetails from "./component/BrandSentineldetails/User Talking details/UserTalkingDetails.jsx";
import UserReachedDetails from "./component/BrandSentineldetails/User Reached details/UserReachedDetails.jsx";
import UserLikesDetails from './component/BrandSentineldetails/User Likes details/UserLikesDetails.jsx'
import TopicsDetails from "./component/BrandSentineldetails/Topics details/TopicsDetails.jsx";
import PostsDetails from "./component/BrandSentineldetails/Post details/PostsDetails.jsx";


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
          element={<PublicSearchDetailsBox />}
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
        <Route
          path="/sanctions-details"
          element={<SanctionsDetailsBox />}
        ></Route>
        <Route
          path="/procurement-details"
          element={<ProcurementDetails />}
        ></Route>
        <Route
          path="/gazettes-details"
          element={<GazettesDetailsBox />}
        ></Route>
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
        <Route
          path="/darknet/datasetdetails"
          element={<DataSetsDetails />}
        ></Route>
        <Route path="/darknet/typesdetails" element={<TypesDetails />}></Route>
        <Route
          path="/darknet/languagedetailsbox"
          element={<LanguageDetailsBox />}
        ></Route>
        <Route
          path="/geopolitical-intelligence/map"
          element={<Map Location={location} zoomLevel={17} />}
        ></Route>
        <Route
          path="/addthirdpartydetailsbox"
          element={<GeneraldataAdd />}
        ></Route>
        <Route
          path="/generaldetailspersonal"
          element={<GeneralPersonalBox />}
        ></Route>
        <Route path="/generaluserbox" element={<GeneralUserbox />}></Route>
        <Route
          path="/generalaccountbox"
          element={<GeneralAccountbox />}
        ></Route>

        <Route
          path="/discovery/datasets-details"
          element={<DiscoveryDatasetdetails />}
        ></Route>
        <Route
          path="/discovery/types-details"
          element={<DiscoveryTypesDetails />}
        ></Route>
        <Route
          path="/discovery/countries-details"
          element={<DiscoveryCountriesDetails />}
        ></Route>
        <Route
          path="/discovery/languages-details"
          element={<DiscoveryLanguagesDetails />}
        ></Route>
        <Route
          path="/discovery/email-details"
          element={<DiscoveryEmailDetails />}
        ></Route>
        <Route
          path="/discovery/phone-details"
          element={<DiscoveryPhoneDetails />}
        ></Route>
        <Route
          path="/discovery/name-details"
          element={<DiscoveryNameDetails />}
        ></Route>
        <Route
          path="/discovery/address-details"
          element={<DiscoveryAddressDetails />}
        ></Route>
        <Route
          path="/discovery/filetypes-details"
          element={<DiscoveryFileTypesDetails />}
        ></Route>

        <Route
          path="/generalimageresearch"
          element={<GeneralImageResearch />}
        ></Route>
        <Route path="/generalsourcebox" element={<GeneralSourceBox />}></Route>
        <Route
          path="/generalsettingbox"
          element={<GeneralSettingbox />}
        ></Route>
        <Route
          path="/social-scan-detials/mentions-details"
          element={<MentionsDetails />}
        ></Route>
        <Route
          path="/social-scan-detials/timeline-details"
          element={<TimelineDetails />}
        ></Route>
        <Route
          path="/social-scan-detials/ecommerce-details"
          element={<ECommerceDetails />}
        ></Route>
        <Route
          path="/social-scan-detials/gender-details"
          element={<GenderDetails />}
        ></Route>
        <Route
          path="/social-scan-detials/socialmedia-details"
          element={<SocialMediaDetails />}
        ></Route>
        <Route
          path="/social-scan-detials/brandlanguagedetails"
          element={<BrandLanguageDetails />}
        ></Route>
        <Route
          path="/social-scan-detials/sentiment-details"
          element={<SentimentDetails />}
        ></Route>
        <Route
          path="/kyc-organization/organizationintelligenceaddbox"
          element={<OrganizationIntelligenceBox />}
        ></Route>
        <Route
          path="/Organziationsourcebox"
          element={<OrganizationSourceBox />}
        ></Route>
        <Route
          path="/organizationsocialbox"
          element={<OrganizationSocialBox />}
        ></Route>
        <Route
          path="/organizationsourcecheck"
          element={<OrganizationSourceCheck />}
        ></Route>
        <Route
          path="/organizationsourcecheck"
          element={<OrganizationSourceCheck />}
        ></Route>
        <Route
          path="/organizationsettingbox"
          element={<OrganizationSettingBox />}
        ></Route>
        <Route
          path="/organizationsettingbox"
          element={<OrganizationSettingBox />}
        ></Route>
        <Route path="/realtimeaddbox" element={<RealtimeAddBox />}></Route>
        <Route
          path="/realtimeprimarybox"
          element={<RealtimePrimaryBox />}
        ></Route>
        <Route
          path="/realtimesettingbox"
          element={<RealtimeSettingBox />}
        ></Route>
        <Route path="/realtimemapbox" element={<RealtimeMapBox />}></Route>
        <Route
          path="/geopolitical-intelligence/map"
          element={<SocialMap />}
        ></Route>
        <Route path="/surface" element={<DHPSurfaceCategory />}></Route>
        <Route path="/cloudfile" element={<DHPCloudfile />}></Route>
        <Route
          path="/surface/category-details"
          element={<DHPSurfaceCategoryDetails />}
        ></Route>
        <Route
          path="/surface/result-details"
          element={<DHPSurfaceResultDetails />}
        ></Route>

        <Route
          path="/cloudfile/task-details"
          element={<DHPCloudfileTaskDetails />}
        ></Route>
        <Route
          path="/cloudfile/new-links-details"
          element={<DHPCloudfileNewLinksDetails />}
        ></Route>
        <Route
          path="/brand-sentinel/posts-made-details"
          element={<PostsmadeDetails />}
        ></Route>
        <Route
          path="/brand-sentinel/user-talking-details"
          element={<UserTalkingDetails />}
        ></Route>
        <Route
          path="/brand-sentinel/user-reached-details"
          element={<UserReachedDetails />}
        ></Route>
        <Route
          path="/brand-sentinel/user-likes-details"
          element={<UserLikesDetails />}
        ></Route>
        <Route
          path="/brand-sentinel/topics-details"
          element={<TopicsDetails />}
        ></Route>
         <Route
          path="/brand-sentinel/posts-details"
          element={<PostsDetails />}
        ></Route>

        <Route path="/geoaddform" element={<GeoForm />}></Route>
        <Route path="/geoprimary" element={<GeoPrimary />}></Route>
        <Route path="/geosetting" element={<GeoSetting />}></Route>
        <Route path="/geomap" element={<GeoMap />}></Route>
        <Route path="/geohashtag" element={<GeoHashtag />}></Route>
        <Route path="/brandform" element={<BrandForm />}></Route>
        <Route path="/phonelockupform" element={<PhoneLockupForm />}></Route>
        <Route path="/emaillockupform" element={<EmailLockupForm />}></Route>
        <Route path="/cardlockupform" element={<CardLockupForm />}></Route>
        <Route path="/sanctionform" element={<SanctionForm />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
