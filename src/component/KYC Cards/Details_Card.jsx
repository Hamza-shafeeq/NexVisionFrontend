import React from "react";
import { DetailsCardStyled } from "./style";
import kycLogo from "../../image/kyc card.png";

function Details_Card(props) {
  return (
    <DetailsCardStyled>
      <div className="main-details-card">
        <div className="container-details-card">
          <div className="title-details-card">
            <img className="title-img" src={kycLogo} alt="" />
            <span className="title-text"> {props.title}</span>
          </div>
          <div className="case-id-card">
            <span className="case-id">Case Id : {props.caseID}</span>
            <div className="status-card-div">
              <span className="status-card">Status:</span>
              <span className="status"> {props.status}</span>
            </div>
          </div>
          <div className="creation-card">
            <div className="create-card">
              <strong>Created At: </strong>
              March 26th, 2023 11:44pm
            </div>
            <div>
              <strong>Updated At: </strong>
              March 26th, 2023 11:44pm
            </div>
          </div>
          <div className="view-details-btn">
            <button className="view-btn">View Details</button>>
          </div>
        </div>
      </div>
      
    </DetailsCardStyled>
  );
}

export default Details_Card;
