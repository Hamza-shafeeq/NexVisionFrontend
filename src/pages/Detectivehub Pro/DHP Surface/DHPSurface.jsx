import React from "react";
import DetailsCard from "../../../component/DetectiveHub Pro/Surface/DetailsCard";
import { DhpSurface } from "./dhp-surface";
import DHPHeader from "../../../component/DetectiveHub Pro/Surface/DHPHeader";
import dhpSurface from "../../../image/dhpsurface.svg";


import Sidebar from "../../../component/sidebar/sidebar";

export default function DHPSurface() {
  return (
    <Sidebar>
      <DhpSurface>
        <DHPHeader />
        <div className="card-alignment">
          <DetailsCard
            title="Category"
            caseID="01"
            status="finished"
            img={dhpSurface}
            navigateLink="/surface/category-details"
          />
          <DetailsCard
            title="Result"
            caseID="01"
            status="finished"
            img={dhpSurface}
            navigateLink="/surface/result-details"
          />
          
        </div>
      </DhpSurface>
    </Sidebar>
  );
}
