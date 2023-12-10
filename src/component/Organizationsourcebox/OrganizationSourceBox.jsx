import React, { useState } from "react";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function OrganizationSourceBox() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const navigate = useNavigate();
  return (
    <Sidebar>
      <GeneralDataAddStyle>
        <div className="GeneralDataAdd-Main-Section">
          <div className="GeneralDataAdd-Container">
            <div className="Border"></div>
            <div className="GeneralAdd-Header-Gapping">
              <div className="General-Add-Header">
                <h1>Organization Intelligence</h1>
                <span className="General-title">Source Check</span>
              </div>
              <div className="Header-Buttons">
                {" "}
                <button className="Close1Button">Select All</button>
                <button className="Close2Button">De-Select All</button>
              </div>
            </div>
            <div className="File-Main-Section">
              <div className="File-Container">
                <div className="File-Left-Section">
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Darkweb
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    OSINT
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Username
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Personal Info
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Data Breach
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Public
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Confidential
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Restricted
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Sanctions
                  </span>
                </div>
                <div className="File-Right-Section">
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Company Registries
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Procurement
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Persons of Interest
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Court Archives
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Gazettes
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Licenses and Concessions
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Grey Literature
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    News Archives
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Leaks
                  </span>
                </div>
                <div className="File-Right-Section">
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Land Registry
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Regulatory Filings
                  </span>
                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Document Libraries
                  </span>

                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Financial Records
                  </span>

                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Air and Maritime Registers
                  </span>

                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Negative News Check
                  </span>

                  <span className="File-Title1">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    Public Search Engine
                  </span>
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
                  onClick={() => navigate("/organizationsocialbox")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </GeneralDataAddStyle>
    </Sidebar>
  );
}

export default OrganizationSourceBox;
