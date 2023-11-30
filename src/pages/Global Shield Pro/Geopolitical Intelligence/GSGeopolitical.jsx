import React from "react";
import DetailsCard from "../../../component/Global Shield Pro/Geopolitical Intelligence/DetailsCard";
import { GSPGeopolitical } from "./gsp-geopolitical";
import gspMap from "../../../image/GSP card.svg";
import Sidebar from "../../../component/sidebar/sidebar";
import GPIHeader from "../../../component/Global Shield Pro/Geopolitical Intelligence/GeopoliticalHeader";

export default function GSGeopolitical() {
  return (
    <GSPGeopolitical>
      <Sidebar>
        <GPIHeader />
        <div className="card-alignment">
          <DetailsCard
            title="Map"
            caseID="01"
            status="finished"
            img={gspMap}
            navigateLink="/geopolitical-intelligence/map"
          />
        </div>
      </Sidebar>
    </GSPGeopolitical>
  );
}
