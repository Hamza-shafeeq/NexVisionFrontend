import React from "react";
import DetailsCard from "../../../component/Global Shield Pro/RealTime Crisis/DetailsCard";
import { GSPRealTime } from "./gsp-reat-time";
import rtcMap from "../../../image/GSP Real Time/RTCMap.svg";
import Sidebar from "../../../component/sidebar/sidebar";
import RTCHeader from "../../../component/Global Shield Pro/RealTime Crisis/RTCHeader";

export default function GSPRealTimeCrisis() {
  return (
    <GSPRealTime>
      <Sidebar>
        <RTCHeader />
        <div className="card-alignment">
          <DetailsCard
            title="Map"
            caseID="01"
            status="finished"
            img={rtcMap}
          />
        </div>
      </Sidebar>
    </GSPRealTime>
  );
}
