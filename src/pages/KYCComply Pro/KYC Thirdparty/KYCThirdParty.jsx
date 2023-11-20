import React from "react";
import DetailsCard from "../../../component/KYCComplyPro/KYC Thid Party Intelligence/DetailsCard";
import { KycThirdParty } from "./kyc-third-party";
import KYCHeader from "../../../component/KYCComplyPro/KYC Thid Party Intelligence/KYCHeader";
import kycthird2 from "../../../image/kyc thirdparty/2.svg";
import kycthird3 from "../../../image/kyc thirdparty/3.svg";
import kycthird4 from "../../../image/kyc thirdparty/4.svg";
import kycthird5 from "../../../image/kyc thirdparty/5.svg";
import kycthird6 from "../../../image/kyc thirdparty/6.svg";
import kycthird7 from "../../../image/kyc thirdparty/7.svg";
import kycthird8 from "../../../image/kyc thirdparty/8.svg";
import kycthird9 from "../../../image/kyc thirdparty/9.svg";
import kycthird10 from "../../../image/kyc thirdparty/10.svg";
import kycthird11 from "../../../image/kyc thirdparty/11.svg";
import kycthird12 from "../../../image/kyc thirdparty/12.svg";
import kycthird13 from "../../../image/kyc thirdparty/13.svg";
import kycthird14 from "../../../image/kyc thirdparty/14.svg";
import kycthird15 from "../../../image/kyc thirdparty/15.svg";



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
            img={kycthird2}
          />
          <DetailsCard
            title="Affirm"
            caseID="01"
            status="finished"
            img={kycthird2}
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
            img={kycthird5}
          />
          <DetailsCard
            title="Company Registries"
            caseID="01"
            status="finished"
            img={kycthird6}
          />
          <DetailsCard
            title="Court Archives"
            caseID="01"
            status="finished"
            img={kycthird7}
          />
          <DetailsCard
            title="Leaks"
            caseID="01"
            status="finished"
            img={kycthird8}
          />
          <DetailsCard
            title="Document Librarires"
            caseID="01"
            status="finished"
            img={kycthird9}
          />
          <DetailsCard
            title="Personal Info"
            caseID="01"
            status="finished"
            img={kycthird10}
          />
          <DetailsCard
            title="Public"
            caseID="01"
            status="finished"
            img={kycthird10}
          />
          <DetailsCard
            title="Sanctions"
            caseID="01"
            status="finished"
            img={kycthird11}
          />
          <DetailsCard
            title="Procurement"
            caseID="01"
            status="finished"
            img={kycthird12}
          />
          <DetailsCard
            title="Gazettes"
            caseID="01"
            status="incomplete"
            img={kycthird13}
          />
          <DetailsCard
            title="Land resgistry"
            caseID="01"
            status="finished"
            img={kycthird14}
          />
          <DetailsCard
            title="Air and Maritime Registers"
            caseID="01"
            status="incomplete"
            img={kycthird15}
          />
        </div>
      </Sidebar>
    </KycThirdParty>
  );
}
