import React from "react";
import DetailsCard from "../../../component/KYCComplyPro/KYC Organization Intelligence/DetailsCard";
import { KycOrganization } from "./kyc-organization";
import KYCHeader from "../../../component/KYCComplyPro/KYC Organization Intelligence/KYCHeader";
import kycthird1 from "../../../image/kycthird1.svg";
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
          img={kycthird1}
        />
        <DetailsCard
          title="Sanctions"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Procurement"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="OSINT"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Gazettes"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Grey Literature"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Document Libraries"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Financial records"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Public"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Company Registries"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Person of Interest"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Licenses and Concessions"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Leaks"
          caseID="01"
          status="finished"
          img={kycthird1}
        />
        <DetailsCard
          title="Public Search Engine"
          caseID="01"
          status="incomplete"
          img={kycthird1}
        />
      </div>
      </Sidebar>
    </KycOrganization>
  );
}
