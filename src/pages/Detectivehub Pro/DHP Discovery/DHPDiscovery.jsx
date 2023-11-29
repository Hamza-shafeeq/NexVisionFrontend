import React from "react";
import DetailsCard from "../../../component/DetectiveHub Pro/Discovery/DetailsCard";
import { DhpDiscovery } from "./dhp-discovery";
import DHPHeader from "../../../component/DetectiveHub Pro/Discovery/DHPHeader";
import dhpDicovery1 from "../../../image/DHP Discovery/DHP Discovery1.svg";
import dhpDicovery2 from "../../../image/DHP Discovery/DHP Discovery2.svg";
import dhpDicovery3 from "../../../image/DHP Discovery/DHP Discovery3.svg";
import dhpDicovery4 from "../../../image/DHP Discovery/DHP Discovery4.svg";
import dhpDicovery5 from "../../../image/DHP Discovery/DHP Discovery5.svg";
import dhpDicovery6 from "../../../image/DHP Discovery/DHP Discovery6.svg";
import dhpDicovery7 from "../../../image/DHP Discovery/DHP Discovery7.svg";
import dhpDicovery8 from "../../../image/DHP Discovery/DHP Discovery8.svg";
import dhpDicovery9 from "../../../image/DHP Discovery/DHP Discovery9.svg";

import Sidebar from "../../../component/sidebar/sidebar";

export default function DHPDiscovery() {
  return (
    <Sidebar>
      <DhpDiscovery>
        <DHPHeader />
        <div className="card-alignment">
          <DetailsCard
            title="Datasets"
            caseID="01"
            status="finished"
            img={dhpDicovery1}
            navigateLink="/datasetdetails"
          />
          <DetailsCard
            title="Types"
            caseID="01"
            status="finished"
            img={dhpDicovery2}
            navigateLink="/typesdetails"
          />
          <DetailsCard
            title="Countries"
            caseID="01"
            status="finished"
            img={dhpDicovery3}
          />
          <DetailsCard
            title="Languages"
            caseID="01"
            status="finished"
            img={dhpDicovery4}
            navigateLink="/languagedetailsbox"
          />
          <DetailsCard
            title="Emails"
            caseID="01"
            status="finished"
            img={dhpDicovery5}
          />
          <DetailsCard
            title="Phone numbers"
            caseID="01"
            status="finished"
            img={dhpDicovery6}
          />
          <DetailsCard
            title="Names"
            caseID="01"
            status="finished"
            img={dhpDicovery7}
          />
          <DetailsCard
            title="Addresses"
            caseID="01"
            status="finished"
            img={dhpDicovery8}
          />
          <DetailsCard
            title="File types"
            caseID="01"
            status="finished"
            img={dhpDicovery9}
          />
        </div>
      </DhpDiscovery>
    </Sidebar>
  );
}
