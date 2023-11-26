import React from "react";
import { PhoneLookupDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../sidebar/sidebar";

function GeneralInfoDetails() {
  return (
    <>
      <PhoneLookupDetailsStyled>
        <Sidebar>
          <div className="Phone-Lookup-Main-Section">
            <div className="Phone-Lookup-Container">
              <div className="Phone-Lookup-Section">
                <h1 className="Phone-Lookup-Title">Phone Lookup Details</h1>

                <span className="Phone-Lookup-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="phone-lookup-deatils">
                <div className="phone-lookup-fields">
                  <h3>General Info</h3>
                  <input
                    type="text"
                    className="phone-lookup-input"
                    placeholder="no data"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </PhoneLookupDetailsStyled>
    </>
  );
}

export default GeneralInfoDetails;
