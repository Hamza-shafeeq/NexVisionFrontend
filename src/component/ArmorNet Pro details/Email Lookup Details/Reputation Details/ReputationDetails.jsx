import React from "react";
import { ReputationDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";

function ReputationDetails() {
  return (
    <>
      <ReputationDetailsStyled>
        <Sidebar>
          <div className="Reputation-Main-Section">
            <div className="Reputation-Container">
              <div className="Reputation-Section">
                <h1 className="Reputation-Title">Email Lookup Details</h1>

                <span className="Reputation-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="Reputation-deatils">
                <div className="Reputation-fields">
                  <h3>Reputation</h3>
                  <input
                    type="text"
                    className="Reputation-input"
                    placeholder="Poor"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </ReputationDetailsStyled>
    </>
  );
}

export default ReputationDetails;
