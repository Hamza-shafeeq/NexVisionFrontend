import React from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";
import i from "../../../../image/i.png";

function Affirmdetails() {
  return (
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
              <span className="General-Info-Title">Affirm</span>
              <img className="img" src={i} alt="" />
            </div>
            <div className="GeneralSection">
              <table className="General-Table-Section">
                <tr className="General-Top-Section">
                  <th className="General-title">Name</th>
                  <th className="General-title1">Didier Bille</th>
                </tr>
                <tr className="General-Bottom-Section">
                  <td className="General-bottom-title">Description</td>
                  <td className="General-bottom-title2">
                    Director of Human Resources. As a seasoned professional, I
                    help structures to establish a cooperative management and
                    sustainable efficience.
                  </td>
                </tr>
                <tr className="General-Top-Section">
                  <td className="General-bottom-title">Experience</td>
                  <td className="General-bottom-title2">
                    Jun 2021 - Present · 2 yrs 5 mos Sun Chemical · Permanent
                    (Ville de Paris, Île-de-France, France Human Resources
                    Director
                  </td>
                </tr>
                <tr className="General-Bottom-Section">
                  <td className="General-bottom-title2"></td>
                  <td className="General-bottom-title2">
                    Jan 2019 - May 2021 · 2 yrs 5 mos Netflix · Self-employed
                    Senior Human Resources Manager Contractor
                  </td>
                </tr>
                <tr className="General-Top-Section">
                  <td className="General-bottom-title"></td>
                  <td className="General-bottom-title">
                    Jul 2017 - Dec 2018 · 1 yr 6 mos BONNA SABLA (Paris Area,
                    France) Human Resources Director
                  </td>
                </tr>
                <tr className="General-Bottom-Section">
                  <td className="General-bottom-title">Education</td>
                  <td className="General-bottom-title2">
                    2009 - 2009 Harvard Business School Master's degree,
                    Leadership and Strategy
                  </td>
                </tr>
                <tr className="General-Top-Section">
                  <td className="General-bottom-title"></td>
                  <td className="General-bottom-title">
                    2008 - 2009 London Business School Master's degree, Human
                    Resources Development
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
  );
}

export default Affirmdetails;
