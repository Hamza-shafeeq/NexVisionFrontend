import React from "react";
import DetailsCard from "../../../component/KYCComplyPro/KYC Organization Intelligence/DetailsCard";
import { KycOrganization } from "./kyc-organization";
import KYCHeader from "../../../component/KYCComplyPro/KYC Organization Intelligence/KYCHeader";
import kycOrg1 from "../../../image/kyc organization/1.svg";
import kycOrg2 from "../../../image/kyc organization/2.svg";
import kycOrg3 from "../../../image/kyc organization/3.svg";
import kycOrg4 from "../../../image/kyc organization/4.svg";
import kycOrg5 from "../../../image/kyc organization/5.svg";
import kycOrg6 from "../../../image/kyc organization/6.svg";
import kycOrg7 from "../../../image/kyc organization/7.svg";
import kycOrg8 from "../../../image/kyc organization/8.svg";
import kycOrg9 from "../../../image/kyc organization/9.svg";
import kycOrg10 from "../../../image/kyc organization/10.svg";
import kycOrg11 from "../../../image/kyc organization/11.svg";
import kycOrg12 from "../../../image/kyc organization/12.svg";
import kycOrg13 from "../../../image/kyc organization/13.svg";

import Sidebar from "../../../component/sidebar/sidebar";

export default function KYCOrganization() {
  return (
    <KycOrganization>
      <Sidebar>
      <KYCHeader />
      <div className="card-alignment">
        <DetailsCard
          title="General Info"
          caseID="01"
          status="finished"
          img={kycOrg1}
          navigateLink = '/organization-intelligence/general-details'
        />
        <DetailsCard
          title="Sanctions"
          caseID="01"
          status="finished"
          img={kycOrg2}
          navigateLink = "/organization-intelligence/sanctions-details"
        />
        <DetailsCard
          title="Procurement"
          caseID="01"
          status="finished"
          img={kycOrg3}
          navigateLink="/organization-intelligence/procurement-details"
        />
        <DetailsCard
          title="OSINT"
          caseID="01"
          status="finished"
          img={kycOrg4}
          navigateLink="/organization-intelligence/osint-details"

        />
        <DetailsCard
          title="Gazettes"
          caseID="01"
          status="finished"
          img={kycOrg5}
          navigateLink="/organization-intelligence/gazettes-details"

        />
        <DetailsCard
          title="Grey Literature"
          caseID="01"
          status="finished"
          img={kycOrg6}
          navigateLink="/organization-intelligence/grey-literature-details"

        />
        <DetailsCard
          title="Document Libraries"
          caseID="01"
          status="finished"
          img={kycOrg7}
          navigateLink="/organization-intelligence/document-libraries-details"

        />
        <DetailsCard
          title="Financial records"
          caseID="01"
          status="finished"
          img={kycOrg8}
          navigateLink="/organization-intelligence/financial-records-details"

        />
        <DetailsCard
          title="Public"
          caseID="01"
          status="finished"
          img={kycOrg9}
          navigateLink="/organization-intelligence/public-details"
        />
        <DetailsCard
          title="Company Registries"
          caseID="01"
          status="finished"
          img={kycOrg10}
          navigateLink="/organization-intelligence/company-registries-details"
        />
        <DetailsCard
          title="Person of Interest"
          caseID="01"
          status="finished"
          img={kycOrg11}
          navigateLink="/organization-intelligence/person-of-interest-details"
        />
        <DetailsCard
          title="Licenses and Concessions"
          caseID="01"
          status="finished"
          img={kycOrg12}
          navigateLink="/organization-intelligence/licenses-and-concessions-details"
        />
        <DetailsCard
          title="Leaks"
          caseID="01"
          status="finished"
          img={kycOrg13}
          navigateLink="/organization-intelligence/leaks-details"
        />
        <DetailsCard
          title="Public Search Engine"
          caseID="01"
          status="incomplete"
          img={kycOrg11}
          navigateLink="/organization-intelligence/public-search-engine-details"
        />
      </div>
      </Sidebar>
    </KycOrganization>
  );
}
