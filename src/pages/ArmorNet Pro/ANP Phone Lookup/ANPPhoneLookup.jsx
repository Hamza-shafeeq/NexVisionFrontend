import React from "react";
import DetailsCard from '../../../component/ArmorNet Pro/Phone Lookup/DetailsCard';
import { AnpPhonelLookup } from "./anp-phone-lookup";
import ANPHeader from "../../../component/ArmorNet Pro/Phone Lookup/ANPHeader"
import anpPhone1 from "../../../image/Anp Phone Lookup/ANP card.svg";
import Sidebar from "../../../component/sidebar/sidebar";

export default function ANPPhoneLookup() {
  return (
    <Sidebar>
      <AnpPhonelLookup>
        <ANPHeader />
        <div className="card-alignment">
          <DetailsCard
            title="Online Social Profiles"
            caseID="01"
            status="finished"
            img={anpPhone1}
          />
          <DetailsCard
            title="General Info"
            caseID="01"
            status="finished"
            img={anpPhone1}
          />
          
          
        </div>
      </AnpPhonelLookup>
    </Sidebar>
  );
}
