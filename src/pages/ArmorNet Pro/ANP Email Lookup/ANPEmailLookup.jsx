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
            navigateLink="/email-lookup/email-details"
          />
          <DetailsCard
            title="Validity"
            caseID="01"
            status="finished"
            img={anpEmail1}
            navigateLink="/email-lookup/validity-details"
          />
          <DetailsCard
            title="Domain"
            caseID="01"
            status="finished"
            img={anpEmail1}
            navigateLink="/email-lookup/domain-details"
          />
          <DetailsCard
            title="Reputation"
            caseID="01"
            status="finished"
            img={anpEmail1}
            navigateLink="/email-lookup/reputation-details"
          />
          <DetailsCard
            title="General Info"
            caseID="01"
            status="finished"
            img={anpEmail1}
            navigateLink="/email-lookup/general-info-details"
          />
          <DetailsCard
            title="Online Social Profiles"
            caseID="01"
            status="finished"
            img={anpEmail1}
            navigateLink="/email-lookup/online-social-profiles-details"
          />
          <DetailsCard
            title="Registered Social Profiles"
            caseID="01"
            status="finished"
            img={anpEmail1}
            navigateLink="/email-lookup/validity-details"
          />
          <DetailsCard
            title="Data Breaches"
            caseID="01"
            status="finished"
            img={anpEmail1}
            navigateLink="/email-lookup/validity-details"
          />
        </div>
      </AnpEmailLookup>
    </Sidebar>
  );
}
