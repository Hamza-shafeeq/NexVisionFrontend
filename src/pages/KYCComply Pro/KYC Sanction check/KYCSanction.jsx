import React from "react";
import DetailsCard from "../../../component/KYCComplyPro/KYC Sanction Check/DetailsCard";
import { KycSanction } from "./kyc-sanction";
import KYCHeader from "../../../component/KYCComplyPro/KYC Sanction Check/KYCHeader";
import kycthird1 from "../../../image/kycCardLook.svg";
import Sidebar from "../../../component/sidebar/sidebar";

export default function KYCSanction() {
  return (
    <Sidebar>
      <KycSanction>
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
        </div>
      </KycSanction>
    </Sidebar>
  );
}
