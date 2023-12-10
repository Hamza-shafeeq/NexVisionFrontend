import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralDataAddStyle } from "./style";

import { RiCalendarTodoLine } from "react-icons/ri";
import Sidebar from "../sidebar/sidebar";
function SanctionForm() {
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
                    <span className="Sanction-title">Sanction</span>
                  </div>
                </div>
                <div className="Border"></div>{" "}
              </div>
            </div>

            <div className="Form-Gapping">
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Case Id</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter Id "
                    />
                  </div>
                </div>
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Nationality</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter ID"
                    />
                  </div>
                </div>
              </div>
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Entity Type</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Person"
                    />
                  </div>
                </div>{" "}
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Birth date (from)</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="MM/DD/YY"
                    />
                    <RiCalendarTodoLine className="EyeIcon" />
                  </div>
                </div>
              </div>
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Name</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Person Name"
                    />
                  </div>
                </div>{" "}
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Birth date(to)</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="MM/DD/YY"
                    />
                    <RiCalendarTodoLine className="EyeIcon" />
                  </div>
                </div>
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
                  onClick={() => navigate("/generaldetailspersonal")}
                >
                  Next
                </button>
              </div>
            </div>
            <div className="Brand-Add-Title">
              <span>Link to primary case</span>
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
                  onClick={() => navigate("/phone-lookup")}
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

export default SanctionForm;
