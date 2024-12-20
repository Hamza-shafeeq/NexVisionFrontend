import React from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";
import i from "../../../../image/osnt.png";
import { LuArrowDownUp } from "react-icons/lu";

function OSINTDetails() {
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
                <span className="General-Info-Title">OSINT</span>
                <img className="img" src={i} alt="" />
              </div>
              <div className="GeneralSection">
                <table className="General-Table-Section">
                  <tr className="General-Top-Section">
                    <th className="General-title">
                      <LuArrowDownUp className="Arrow-Logo" />
                      Type
                    </th>
                    <th className="General-title1">
                      <LuArrowDownUp className="Arrow-Logo" />
                      Unqiue
                    </th>
                    <th className="General-title">
                      <LuArrowDownUp className="Arrow-Logo" />
                      Total
                    </th>
                    <th className="General-title1">
                      <LuArrowDownUp className="Arrow-Logo" />
                      Last Data
                    </th>
                  </tr>
                  <tr className="General-Bottom-Section">
                    <td className="General-bottom-title">
                      Public Code Repository
                    </td>
                    <td className="General-bottom-title2">1</td>
                    <td className="General-bottom-title">1</td>
                    <td className="General-bottom-title2">
                      2023-10-25 11:39:47
                    </td>
                  </tr>
                  <tr className="General-Top-Section">
                    <td className="General-title">Username</td>
                    <td className="General-title3">1</td>
                    <td className="General-title">1</td>
                    <td className="General-title3">2023-10-25 11:39:47</td>
                  </tr>
                  <tr className="General-Bottom-Section">
                    <td className="General-bottom-title">
                      Wikipedia Page Edit
                    </td>
                    <td className="General-bottom-title4">50</td>
                    <td className="General-bottom-title">50</td>
                    <td className="General-bottom-title4">
                      2023-10-25 11:39:47
                    </td>
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

export default OSINTDetails;
