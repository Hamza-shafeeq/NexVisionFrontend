import React from "react";
import { GeneralInfoDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";

function GeneralInfoDetails() {
  return (
    <>
      <GeneralInfoDetailsStyled>
        <Sidebar>
          <div className="GeneralInfo-Main-Section">
            <div className="GeneralInfo-Container">
              <div className="GeneralInfo-Section">
                <h1 className="GeneralInfo-Title">Email Lookup Details</h1>

                <span className="GeneralInfo-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="GeneralInfo-deatils">
                <div className="GeneralInfo-fields">
                  <h3>General Info</h3>
                  <div className="GeneralInfo-input-container">
                    <div className="GeneralInfo-input">
                      <span>Is Free: true</span>
                      <span>Is Syntax: true</span>
                      <span>Is Domain: true</span>
                      <span>Is Smtp: true</span>
                      <span>Is Verified: true</span>
                      <span>Is Server Down: true</span>
                      <span>Is Greylisted: true</span>
                      <span>Is Disposable: true</span>
                      <span>Is Suppressed: true</span>
                      <span>Is Role: true</span>
                      <span>Is High Risk: true</span>
                      <span>Is Catchall: true </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </GeneralInfoDetailsStyled>
    </>
  );
}

export default GeneralInfoDetails;
