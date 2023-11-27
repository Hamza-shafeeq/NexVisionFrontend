import React from "react";
import { DetailsCardStyle } from "./DetailsCardStyle";
import { useNavigate } from "react-router-dom";

function DetailsCard(props) {
  const navigate = useNavigate();

  return (
    <DetailsCardStyle>
      <div className="main-details-card">
        <div className="container-details-card">
          <div className="title-details-card">
            <div className="title-img">
              <img className="img" src={props.img} alt="" />
            </div>

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
            <button className="view-btn" onClick={() => navigate(props.navigateLink)}>View Details</button>
          </div>
        </div>
      </div>
    </DetailsCardStyle>
  );
}

export default DetailsCard;
