import React from "react";
import DetailsCard from "../../../component/SocialScan Pro/Brand Sentinel/DetailsCard";
import { BrandSentinelStyle } from "./brand-sentinel";
import SSPHeader from "../../../component/SocialScan Pro/Brand Sentinel/SSPHeader";
import Ssp from "../../../image/SSpHeder.svg";

import Sidebar from "../../../component/sidebar/sidebar";

export default function BrandSentinel() {
  return (
    <BrandSentinelStyle>
      <Sidebar>
        <SSPHeader />
        <div className="card-alignment">
          <DetailsCard
            title="Post Made"
            caseID="01"
            status="finished"
            img={Ssp}
          />
          <DetailsCard
            title="User Talking"
            caseID="01"
            status="finished"
            img={Ssp}
          />
          <DetailsCard
            title="User Reached"
            caseID="01"
            status="finished"
            img={Ssp}
          />
          <DetailsCard
            title="User Likes"
            caseID="01"
            status="finished"
            img={Ssp}
          />
          <DetailsCard
            title="Mentions"
            caseID="01"
            status="finished"
            img={Ssp}
            navigateLink="/social-scan-detials/mentions-details"
          />
          <DetailsCard title="Topics" caseID="01" status="finished" img={Ssp} />
          <DetailsCard
            title="Language"
            caseID="01"
            status="finished"
            img={Ssp}
            navigateLink="/social-scan-detials/brandlanguagedetails"
          />
          <DetailsCard
            title="Social Media"
            caseID="01"
            status="finished"
            img={Ssp}
            navigateLink="/social-scan-detials/socialmedia-details"
          />
          <DetailsCard
            title="Gender/Age"
            caseID="01"
            status="finished"
            img={Ssp}
            navigateLink="/social-scan-detials/gender-details"
          />
          <DetailsCard
            title="E-commerce"
            caseID="01"
            status="finished"
            img={Ssp}
            navigateLink="/social-scan-detials/ecommerce-details"
          />
          <DetailsCard
            title="Sentiment"
            caseID="01"
            status="finished"
            img={Ssp}
            navigateLink="/social-scan-detials/sentiment-details"
          />
          <DetailsCard
            title="Timeline"
            caseID="01"
            status="finished"
            img={Ssp}
            navigateLink="/social-scan-detials/timeline-details"
          />
          <DetailsCard
            title="Countries"
            caseID="01"
            status="finished"
            img={Ssp}
            navigateLink="/geopolitical-intelligence/map"
          />
          <DetailsCard
            title="Posts"
            caseID="01"
            status="incomplete"
            img={Ssp}
          />
        </div>
      </Sidebar>
    </BrandSentinelStyle>
  );
}
