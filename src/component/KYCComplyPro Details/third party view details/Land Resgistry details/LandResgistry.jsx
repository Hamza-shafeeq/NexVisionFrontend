import React from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";
import i from "../../../../image/land.png";
import { LuArrowDownUp } from "react-icons/lu";

function LandResgistry() {
  return (
    <>
      <ThirdviewStyled>
        <Sidebar>
          <div className="Third-View-Main-Section">
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
                <span className="General-Info-Title">Land Resgistry</span>
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
                    <td className="General-bottom-title">TARIQ A A A DEHRAB</td>
                    <td className="General-bottom-title2">
                      Slovak Land Registry
                    </td>
                  </tr>
                  <tr className="General-Top-Section">
                    <td className="General-title">Aliya A A MATAQI</td>
                    <td className="General-title3">Slovak Land Registry</td>
                  </tr>
                  <tr className="General-Bottom-Section">
                    <td className="General-bottom-title">Asaad A A ALBANWAN</td>
                    <td className="General-bottom-title4">
                      Slovak Land Registry
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

export default LandResgistry;
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
      <span className="General-Info-Title">Land Resgistry</span>
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
          <td className="General-bottom-title">A Marlow</td>
          <td className="General-bottom-title2">HBGary leaked emails</td>
        </tr>
        <tr className="General-Top-Section">
          <td className="General-title">Woolson, Martha A.</td>
          <td className="General-title3">HBGary leaked emails</td>
        </tr>
        <tr className="General-Bottom-Section">
          <td className="General-bottom-title">Michael, Jim A.</td>
          <td className="General-bottom-title4">HBGary leaked emails</td>
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
</div>;
