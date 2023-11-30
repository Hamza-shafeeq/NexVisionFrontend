import React from "react";
import DetailsCard from "../../../component/DetectiveHub Pro/Darknet/DetailsCard";
import { DhpDarknet } from "./dhp-darknet";
import DHPHeader from "../../../component/DetectiveHub Pro/Darknet/DHPHeader";
import dhpDarnet1 from "../../../image/DHP Darknet/DHP darknet1.svg";
import dhpDarnet2 from "../../../image/DHP Darknet/DHP darknet2.svg";
import dhpDarnet3 from "../../../image/DHP Darknet/DHP darknet3.svg";

import Sidebar from "../../../component/sidebar/sidebar";

export default function DHPDarknet() {
  return (
    <Sidebar>
      <DhpDarknet>
        <DHPHeader />
        <div className="card-alignment">
          <DetailsCard
            title="Data Source"
            caseID="01"
            status="finished"
            img={dhpDarnet1}
            navigateLink="/darknet/datasetdetails"
          />
          <DetailsCard
            title="Category"
            caseID="01"
            status="finished"
            img={dhpDarnet2}
            navigateLink="/darknet/typesdetails"
          />
          <DetailsCard
            title="Languages"
            caseID="01"
            status="finished"
            img={dhpDarnet3}
            navigateLink="/darknet/languagedetailsbox"
          />
        </div>
      </DhpDarknet>
    </Sidebar>
  );
}
