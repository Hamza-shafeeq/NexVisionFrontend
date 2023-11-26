import React from "react";
import { ThirdviewStyled } from "./style";

import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../component/sidebar/sidebar";

function thirddetails() {
  return (
    <>
      <ThirdviewStyled>
        <Sidebar>
          <div className="Third-View-Main-Section">
            <div className="Third-View-Container">
              <div className="Third-Header-Section">
                <h1 className="Third-View-Title">Third Party</h1>

                <span className="Third-View-Text">
                  <RiArrowGoBackFill className="Back-logo" />
                  Back
                </span>
              </div>
            </div>
          </div>
        </Sidebar>
      </ThirdviewStyled>
    </>
  );
}

export default thirddetails;
