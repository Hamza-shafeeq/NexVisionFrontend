import React from "react";
import DetailsCard from "../../../component/ArmorNet Pro/Email lookup/DetailsCard";
import { AnpEmailLookup } from "./anp-email-lookup";
import ANPHeader from "../../../component/ArmorNet Pro/Email lookup/ANPHeader";
import anpEmail1 from "../../../image/ANP Email Lookup/ANP email.svg";
import Sidebar from "../../../component/sidebar/sidebar";

export default function ANPPhoneLookup() {
  return (
    <Sidebar>
      <AnpEmailLookup>
        <ANPHeader />
        <div className="card-alignment">
          <DetailsCard
            title="Email"
            caseID="01"
            status="finished"
            img={anpEmail1}
          />
          <DetailsCard
            title="Validity"
            caseID="01"
            status="finished"
            img={anpEmail1}
          />
          <DetailsCard
            title="Domian"
            caseID="01"
            status="finished"
            img={anpEmail1}
          />
          <DetailsCard
            title="Reputation"
            caseID="01"
            status="finished"
            img={anpEmail1}
          />
          <DetailsCard
            title="General Info"
            caseID="01"
            status="finished"
            img={anpEmail1}
          />
          <DetailsCard
            title="Online Social Profiles"
            caseID="01"
            status="finished"
            img={anpEmail1}
          />
          <DetailsCard
            title="Registered Social Profiles"
            caseID="01"
            status="finished"
            img={anpEmail1}
          />
          <DetailsCard
            title="Data Breaches"
            caseID="01"
            status="finished"
            img={anpEmail1}
          />
          
        </div>
      </AnpEmailLookup>
    </Sidebar>
  );
}
