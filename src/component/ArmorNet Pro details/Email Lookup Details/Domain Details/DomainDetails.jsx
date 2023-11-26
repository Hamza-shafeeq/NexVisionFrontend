import React from "react";
import { DomainDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";

function DomainDetails() {
  return (
    <>
      <DomainDetailsStyled>
        <Sidebar>
          <div className="Domain-Main-Section">
            <div className="Domain-Container">
              <div className="Domain-Section">
                <h1 className="Domain-Title">Email Lookup Details</h1>

                <span className="Domain-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="Domain-deatils">
                <div className="Domain-fields">
                  <h3>Domain</h3>
                  <input
                    type="text"
                    className="Domain-input"
                    placeholder="abc@gmail.com"
                    disabled
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </DomainDetailsStyled>
    </>
  );
}

export default DomainDetails;
