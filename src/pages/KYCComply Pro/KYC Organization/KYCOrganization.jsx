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
        />
        <DetailsCard
          title="Sanctions"
          caseID="01"
          status="finished"
          img={kycOrg2}
        />
        <DetailsCard
          title="Procurement"
          caseID="01"
          status="finished"
          img={kycOrg3}
        />
        <DetailsCard
          title="OSINT"
          caseID="01"
          status="finished"
          img={kycOrg4}
        />
        <DetailsCard
          title="Gazettes"
          caseID="01"
          status="finished"
          img={kycOrg5}
        />
        <DetailsCard
          title="Grey Literature"
          caseID="01"
          status="finished"
          img={kycOrg6}
        />
        <DetailsCard
          title="Document Libraries"
          caseID="01"
          status="finished"
          img={kycOrg7}
        />
        <DetailsCard
          title="Financial records"
          caseID="01"
          status="finished"
          img={kycOrg8}
        />
        <DetailsCard
          title="Public"
          caseID="01"
          status="finished"
          img={kycOrg9}
        />
        <DetailsCard
          title="Company Registries"
          caseID="01"
          status="finished"
          img={kycOrg10}
        />
        <DetailsCard
          title="Person of Interest"
          caseID="01"
          status="finished"
          img={kycOrg11}
        />
        <DetailsCard
          title="Licenses and Concessions"
          caseID="01"
          status="finished"
          img={kycOrg12}
        />
        <DetailsCard
          title="Leaks"
          caseID="01"
          status="finished"
          img={kycOrg13}
        />
        <DetailsCard
          title="Public Search Engine"
          caseID="01"
          status="incomplete"
          img={kycOrg11}
        />
      </div>
      </Sidebar>
    </KycOrganization>
  );
}
