import React from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";
import i from "../../../../image/i.png";

function Newlinks() {
  return (
    <>
      <ThirdviewStyled>
        <Sidebar>
          <div className="Third-View-Main-Section">
            {" "}
            <div className="Third-Header-Section">
              <h1 className="Third-View-Title">CloudFile</h1>

              <span className="Third-View-Text">
                <RiArrowGoBackFill className="Back-logo" />
                Back
              </span>
            </div>
            <div className="Third-View-Container">
              {" "}
              <div className="General-Info-Section">
                <span className="General-Info-Title">New Links</span>
                <img className="img" src={i} alt="" />
              </div>
              <div className="GeneralSection">
                <table className="General-Table-Section">
                  <tr className="General-Top-Section">
                  <th className="General-title">Name</th>
                  <th className="General-title">AKA</th>
                  <th className="General-title">Case ID</th>
                  <th className="General-title">Country</th>
                  <th className="General-title">Email</th>
                  <th className="General-title">Phone</th>
                  <th className="General-title">Website</th>
                  </tr>
                <tr className="General-Bottom-Section">
                  <td className="General-bottom-title">Robin</td>
                  <td className="General-bottom-title">243</td>
                  <td className="General-bottom-title">1</td>
                  <td className="General-bottom-title">France</td>
                  <td className="General-bottom-title">abc@gmail.com</td>
                  <td className="General-bottom-title">xxxxxxxxxx</td>
                  <td className="General-bottom-title">www.aisight.com</td>
                </tr>
              </table>
            </div>
          </div>
          </div>
        </Sidebar>
      </ThirdviewStyled>
    </>
  );
}

export default Newlinks;
