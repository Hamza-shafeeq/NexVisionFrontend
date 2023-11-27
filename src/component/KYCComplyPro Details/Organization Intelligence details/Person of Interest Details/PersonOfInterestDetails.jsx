import React from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";
import i from "../../../../image/i.png";
import { LuArrowDownUp } from "react-icons/lu";

function PersonOfInterestDetails() {
  return (
    <>
      <ThirdviewStyled>
        <Sidebar>
          <div className="Third-View-Main-Section">
            {" "}
            <div className="Third-Header-Section">
              <h1 className="Third-View-Title">Organization Intelligence</h1>

              <span className="Third-View-Text">
                <RiArrowGoBackFill className="Back-logo" />
                Back
              </span>
            </div>
            <div className="Third-View-Container">
              {" "}
              <div className="General-Info-Section">
                <span className="General-Info-Title">Person Of Interest</span>
                <img className="img" src={i} alt="" />
              </div>
              <div className="GeneralSection">
                <table className="General-Table-Section">
                  <tr className="General-Top-Section">
                    <th className="General-title">
                      <LuArrowDownUp className="Arrow-Logo" />
                      Title
                    </th>
                    <th className="General-title1">
                      <LuArrowDownUp className="Arrow-Logo" />
                      Source
                    </th>
                  </tr>
                  <tr className="General-Bottom-Section">
                    <td className="General-bottom-title">ΜΕΡΟΣ A</td>
                    <td className="General-bottom-title2">Cyprus — Asset declarations of the members of The House of Representatives</td>
                  </tr>
                  <tr className="General-Top-Section">
                    <td className="General-title">ΜΕΡΟΣ A</td>
                    <td className="General-title3">Cyprus — Asset declarations of the members of The House of Representatives</td>
                  </tr>
                  <tr className="General-Bottom-Section">
                    <td className="General-bottom-title">ODBINV S/A</td>
                    <td className="General-bottom-title2">Lava Jato</td>
                  </tr>
                  
                </table>
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

export default PersonOfInterestDetails;
