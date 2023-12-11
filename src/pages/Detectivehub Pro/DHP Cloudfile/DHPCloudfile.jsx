import React from "react";
import DetailsCard from "../../../component/DetectiveHub Pro/Surface/DetailsCard";
import { DhpCloudfile } from "./dhp-cloudfile";
import DHPHeader from "../../../component/DetectiveHub Pro/Surface/DHPHeader";
import dhpcloudfile from "../../../image/cloudfile1.svg";


import Sidebar from "../../../component/sidebar/sidebar";

export default function DHPCloudfile() {
  return (
    <Sidebar>
      <DhpCloudfile>
        <DHPHeader />
        <div className="card-alignment">
          <DetailsCard
            title="Tasks"
            caseID="01"
            status="finished"
            img={dhpcloudfile}
            navigateLink="/cloudfile/task-details"
          />
          <DetailsCard
            title="New Links"
            caseID="01"
            status="finished"
            img={dhpcloudfile}
            navigateLink="/cloudfile/new-links-details"
          />
          
        </div>
      </DhpCloudfile>
    </Sidebar>
  );
}
