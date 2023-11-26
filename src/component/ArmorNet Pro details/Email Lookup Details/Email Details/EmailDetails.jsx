import React from "react";
import { EmailDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";

function EmailDetails() {
  return (
    <>
      <EmailDetailsStyled>
        <Sidebar>
          <div className="Email-Main-Section">
            <div className="Email-Container">
              <div className="Email-Section">
                <h1 className="Email-Title">Email Lookup Details</h1>

                <span className="Email-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="Email-deatils">
                <div className="Email-fields">
                  <h3>Email</h3>
                  <input
                    type="text"
                    className="Email-input"
                    placeholder="abc@gmail.com"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </EmailDetailsStyled>
    </>
  );
}

export default EmailDetails;
