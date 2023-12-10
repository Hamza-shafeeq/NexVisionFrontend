import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";

function CardLockupForm() {
  const navigate = useNavigate();
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <Sidebar>
      <GeneralDataAddStyle>
        <div className="GeneralDataAdd-Main-Section">
          <div className="GeneralDataAdd-Container">
            <div className="GeneralAdd-Header-Gapping">
              <div className="GeneralAddBox-Header">
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="Sanction-title">Card Lockup</span>
                  </div>
                </div>
                <div className="Border"></div>{" "}
              </div>
            </div>
            <div className="Form-Gapping">
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Case ID</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter ID"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="Form-Gapping">
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Keyboard</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter keyboard "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="Brand-Add-Title">
              <span>Link to primary case</span>
            </div>
            <div className="Form-Gapping">
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting1">
                  <span className="Form-Titles">Choose primary case</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter primary case id"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="Last-Check-Box">
              <div className="Last-Check-Box-Container">
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
                <button
                  className="NextButton"
                  onClick={() => navigate("/brand-sentinel")}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </GeneralDataAddStyle>
    </Sidebar>
  );
}

export default CardLockupForm;
