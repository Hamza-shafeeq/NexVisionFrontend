import React from "react";
import { TopicsDetailsStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../sidebar/sidebar";

function TopicsDetails() {
  return (
    <>
      <TopicsDetailsStyled>
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
                  <h3>Topics</h3>
                  <input
                    type="text"
                    className="Email-input"
                   
                    
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </TopicsDetailsStyled>
    </>
  );
}

export default TopicsDetails;
