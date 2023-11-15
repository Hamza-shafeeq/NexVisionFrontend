import React from "react";
import Details_Card from "./Details_Card";
import { CardStyle } from "./card-style";

export default function Cards() {
  return (
    <CardStyle>
      <div className="card-alignment">
        <Details_Card title = "General Info" caseID= '01' status="finished" />
        <Details_Card title = "Sanctions" caseID= '01' status="finished"/>
        <Details_Card title = "Procurement" caseID= '01' status="finished"/>
        <Details_Card title = "OSINT" caseID= '01' status="finished"/>
        <Details_Card title = "Gazettes" caseID= '01' status="finished"/>
        <Details_Card title = "Grey Literature" caseID= '01' status="finished"/>
        <Details_Card title = "Document Libraries" caseID= '01' status="finished"/>
        <Details_Card title = "Financial records" caseID= '01' status="finished"/>
        <Details_Card title = "Public" caseID= '01' status="finished"/>
        <Details_Card title = "Company Registries" caseID= '01' status="finished"/>
        <Details_Card title = "Person of Interest" caseID= '01' status="finished"/>
        <Details_Card title = "Licenses and Concessions" caseID= '01' status="finished"/>
        <Details_Card title = "Leaks" caseID= '01' status="finished"/>
        <Details_Card title = "Public Search Engine" caseID= '01' status="incomplete"/>
        
    

      </div>
    </CardStyle>
  );
}
