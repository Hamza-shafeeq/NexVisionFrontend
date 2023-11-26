import React from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../sidebar/sidebar";
import i from "../../../image/i.png";
import { LuArrowDownUp } from "react-icons/lu";

function Courtdetails() {
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
                <span className="General-Info-Title">Court </span>
                <img className="img" src={i} alt="" />
              </div>
              <div className="GeneralSection">
                <div className="General-Top-Section">
                  <span className="General-title">
                    <LuArrowDownUp className="Arrow-Logo" />
                    Title
                  </span>
                  <span className="General-title1">
                    <LuArrowDownUp className="Arrow-Logo" />
                    Source
                  </span>
                </div>
                <div className="General-Bottom-Section">
                  <span className="General-bottom-title">Тарасов А. А</span>
                  <span className="General-bottom-title2">
                    Russian Court Cases (РосПравосудие, 2015)
                  </span>
                </div>
                <div className="General-Top-Section">
                  <span className="General-title">Бойков А. А.</span>
                  <span className="General-title3">
                    Russian Court Cases (РосПравосудие, 2015)
                  </span>
                </div>
                <div className="General-Bottom-Section">
                  <span className="General-bottom-title">Кошак А. А.</span>
                  <span className="General-bottom-title4">
                    Russian Court Cases (РосПравосудие, 2015)
                  </span>
                </div>
              </div>
              <div class="button-container">
                <button className="Previous-Button">Previous</button>
                <button className="Number-Button">1</button>
                <button className="Number-Button">2</button>

                <button className="Number-Button">...</button>
                <button className="Number-Button">400</button>
                <button className="Next-Button">Next</button>
              </div>
            </div>
          </div>
        </Sidebar>
      </ThirdviewStyled>
    </>
  );
}

export default Courtdetails;
