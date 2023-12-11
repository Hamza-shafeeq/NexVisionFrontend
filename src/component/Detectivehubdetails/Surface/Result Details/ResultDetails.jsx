import React from "react";
import { ResultDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";

function ResultDetails() {
  return (
    <>
      <ResultDetailsStyled>
        <Sidebar>
          <div className="Email-Main-Section">
            <div className="Email-Container">
              <div className="Email-Section">
                <h1 className="Email-Title">Surface</h1>

                <span className="Email-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
              <div className="Email-deatils">
                <div className="Email-fields">
                  <h3>Result</h3>
                  <input
                    type="text"
                    className="Email-input"
                    placeholder=""
                    disabled
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </ResultDetailsStyled>
    </>
  );
}

export default ResultDetails;
