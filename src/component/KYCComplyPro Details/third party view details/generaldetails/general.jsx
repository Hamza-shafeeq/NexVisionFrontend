import React from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";
import i from "../../../../image/i.png";

function General() {
  return (
    <>
      <ThirdviewStyled>
        <Sidebar>
          <div className="Third-View-Main-Section">
            {" "}
            <div className="Third-Header-Section">
              <h1 className="Third-View-Title">Third Party</h1>

              <span className="Third-View-Text">
                <RiArrowGoBackFill className="Back-logo" />
                Back
              </span>
            </div>
            <div className="Third-View-Container">
              {" "}
              <div className="General-Info-Section">
                <span className="General-Info-Title">General-Info</span>
                <img className="img" src={i} alt="" />
              </div>
              <div className="GeneralSection">
                <div className="General-Top-Section">
                  <span className="General-title">Name</span>
                  <span className="General-title">AKA</span>
                  <span className="General-title">Case ID</span>
                  <span className="General-title">Birthdate</span>
                  <span className="General-title">Country</span>
                  <span className="General-title">Nationality</span>
                  <span className="General-title">Email</span>
                  <span className="General-title">Phone</span>
                </div>
                <div className="General-Bottom-Section">
                  <span className="General-bottom-title">Robin</span>
                  <span className="General-bottom-title">243</span>
                  <span className="General-bottom-title">1</span>
                  <span className="General-bottom-title">1997-02-25</span>
                  <span className="General-bottom-title">France</span>
                  <span className="General-bottom-title">France</span>
                  <span className="General-bottom-title">abc@gmail.com</span>
                  <span className="General-bottom-title">xxxxxxxxxx</span>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </ThirdviewStyled>
    </>
  );
}

export default General;
