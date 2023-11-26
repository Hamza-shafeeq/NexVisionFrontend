import React from "react";
import { ValidityDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";

function ValidityDetails() {
  return (
    <>
      <ValidityDetailsStyled>
        <Sidebar>
          <div className="Validity-Main-Section">
            <div className="Validity-Container">
              <div className="Validity-Section">
                <h1 className="Validity-Title">Email Lookup Details</h1>

                <span className="Validity-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="Validity-deatils">
                <div className="Validity-fields">
                  <h3>Validity</h3>
                  <input
                    type="text"
                    className="Validity-input"
                    placeholder="true"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </ValidityDetailsStyled>
    </>
  );
}

export default ValidityDetails;
