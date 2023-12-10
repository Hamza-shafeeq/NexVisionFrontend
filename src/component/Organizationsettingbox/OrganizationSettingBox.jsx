import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function OrganizationSettingBox() {
  const navigate = useNavigate();
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <>
      <Sidebar>
        <GeneralDataAddStyle>
          <div className="GeneralDataAdd-Main-Section">
            <div className="GeneralDataAdd-Container">
              <div className="Border"></div>
              <div className="GeneralAdd-Header-Gapping">
                <div className="General-Add-Header">
                  <h1>Organization Intelligence</h1>
                </div>
              </div>

              <div className="Last-Check-Box">
                <div className="Last-Check-Box-Container">
                  <span className="Check-Text">Screen Setting</span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Enable Ongoing Screen
                  </span>
                </div>
              </div>

              <div className="Buttons-Section">
                <div className="General-Buttons-Section">
                  <button className="CloseButton">Close</button>
                </div>
                <div className="General-Buttons-Section1">
                  <button className="CloseButton">Previous</button>
                  <button
                    className="NextButton"
                    onClick={() => navigate("/kyc-organization")}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </GeneralDataAddStyle>
      </Sidebar>
    </>
  );
}
export default OrganizationSettingBox;
