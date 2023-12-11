import React from "react";
import { UserTalkingDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../sidebar/sidebar";

function UserTalkingDetails() {
  return (
    <>
      <UserTalkingDetailsStyled>
        <Sidebar>
          <div className="Email-Main-Section">
            <div className="Email-Container">
              <div className="Email-Section">
                <h1 className="Email-Title">Brand Sentinel</h1>

                <span className="Email-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="Email-deatils">
                <div className="Email-fields">
                  <h3>User Talking</h3>
                  <input
                    type="text"
                    className="Email-input"
                    placeholder="0"
                    
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </UserTalkingDetailsStyled>
    </>
  );
}

export default UserTalkingDetails;
