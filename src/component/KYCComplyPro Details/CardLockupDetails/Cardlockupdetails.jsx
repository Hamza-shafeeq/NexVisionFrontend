import React from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../sidebar/sidebar";
import i from "../../../image/i.png";

function Cardlockupdetails() {
  return (
    <ThirdviewStyled>
      <Sidebar>
        <div className="Third-View-Main-Section">
          {" "}
          <div className="Third-Header-Section">
            <h1 className="Third-View-Title">Card Lockup</h1>

            <span className="Third-View-Text">
              <RiArrowGoBackFill className="Back-logo" />
              Back
            </span>
          </div>
          <div className="Third-View-Container">
            {" "}
            <div className="General-Info-Section">
              <span className="General-Info-Title">General</span>
            </div>
            <div className="GeneralSection">
              <div className="Number-Section">
                <span className="Number-Title">+03939399339</span>
              </div>
              <div className="LockupDetails">
                <span className="NumberTitle">Error: 1014</span>
                <span className="NumberTitle">
                  Message: Invalid Credit Card or Debit Card Number
                </span>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </ThirdviewStyled>
  );
}

export default Cardlockupdetails;
