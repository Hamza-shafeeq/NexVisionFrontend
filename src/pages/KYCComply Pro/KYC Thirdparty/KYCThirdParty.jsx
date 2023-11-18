import React from "react";
import DetailsCard from "../../../component/KYCComplyPro/KYC Thid Party Intelligence/DetailsCard";
import { KycThirdParty } from "./kyc-third-party";
import KYCHeader from "../../../component/KYCComplyPro/KYC Thid Party Intelligence/KYCHeader";
import kycthird1 from "../../../image/kycthird1.svg";
import kycthird3 from "../../../image/kycthird3.svg";
import kycthird4 from "../../../image/kycthird4.svg";
import Sidebar from "../../../component/sidebar/sidebar";

export default function KYCThirdParty() {
  return (
    <KycThirdParty>
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
            title="Affirm"
            caseID="01"
            status="finished"
            img={kycthird1}
          />
          <DetailsCard
            title="OSINT"
            caseID="01"
            status="finished"
            img={kycthird3}
          />
          <DetailsCard
            title="Data Breach"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Public Search Engine"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Company Registries"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Court Archives"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Leaks"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Document Librarires"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Personal Info"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Public"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Sanctions"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Procurement"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Gazettes"
            caseID="01"
            status="incomplete"
            img={kycthird4}
          />
          <DetailsCard
            title="Land resgistry"
            caseID="01"
            status="finished"
            img={kycthird4}
          />
          <DetailsCard
            title="Air and Maritime Registers"
            caseID="01"
            status="incomplete"
            img={kycthird4}
          />
        </div>
      </Sidebar>
    </KycThirdParty>
  );
}
