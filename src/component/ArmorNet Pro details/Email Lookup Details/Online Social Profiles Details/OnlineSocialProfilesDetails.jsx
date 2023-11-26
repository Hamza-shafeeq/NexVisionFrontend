import React from "react";
import { OnlineSocialProfilesDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";

function OnlineSocialProfilesDetails() {
  return (
    <>
      <OnlineSocialProfilesDetailsStyled>
        <Sidebar>
          <div className="OnlineSocialProfiles-Main-Section">
            <div className="OnlineSocialProfiles-Container">
              <div className="OnlineSocialProfiles-Section">
                <h1 className="OnlineSocialProfiles-Title">Email Lookup Details</h1>

                <span className="OnlineSocialProfiles-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="OnlineSocialProfiles-deatils">
                <div className="OnlineSocialProfiles-fields">
                  <h3>Online Social Profiles</h3>
                  <input
                    type="text"
                    className="OnlineSocialProfiles-input"
                    placeholder="no profiles found"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </OnlineSocialProfilesDetailsStyled>
    </>
  );
}

export default OnlineSocialProfilesDetails;
