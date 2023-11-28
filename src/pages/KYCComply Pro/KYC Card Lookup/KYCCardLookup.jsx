import React from "react";
import DetailsCard from "../../../component/KYCComplyPro/KYC Card Lookup/DetailsCard";
import { KycCardLookup } from "./kyc-card-lookup";
import KYCHeader from "../../../component/KYCComplyPro/KYC Card Lookup/KYCHeader";
import kycCard from "../../../image/kycCardLook.svg";
import Sidebar from "../../../component/sidebar/sidebar";

export default function KYCCardLookup() {
  return (
    <KycCardLookup>
      <Sidebar>
        <KYCHeader />
        <div className="card-alignment">
          <DetailsCard
            title="General Info"
            caseID="01"
            status="finished"
            img={kycCard}
            navigateLink="/cardlookupdetails"
          />
        </div>
      </Sidebar>
    </KycCardLookup>
  );
}
