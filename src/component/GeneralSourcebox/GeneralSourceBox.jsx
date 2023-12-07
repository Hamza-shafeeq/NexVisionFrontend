import React, { useState } from "react";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function GeneralSourceBox() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  const navigate = useNavigate();
  return (
    <>
      <Sidebar>
        <GeneralDataAddStyle>
          <div className="GeneralDataAdd-Main-Section">
            <div className="GeneralDataAdd-Container">
              <div className="GeneralAddBox-Header">
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number">1</span>
                    <span className="GeneralAdd-Title">General</span>
                  </div>
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number">2</span>
                    <span className="GeneralAdd-Title">Personal</span>
                  </div>{" "}
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number">3</span>
                    <span className="GeneralAdd-Title">User</span>
                  </div>
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number">4</span>
                    <span className="GeneralAdd-Title">Image Research</span>
                  </div>
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number">5</span>
                    <span className="GeneralAdd-Title">Social media</span>
                  </div>
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number1">6</span>
                    <span className="GeneralAdd-Title1">Source</span>
                  </div>
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number">7</span>
                    <span className="GeneralAdd-Title">Setting</span>
                  </div>
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
              </div>
              <div className="GeneralAdd-Header-Gapping">
                <div className="General-Add-Header">
                  <h1>Third Party Intelligence</h1>
                  <span className="General-title">Source</span>
                </div>
                <div className="Header-Buttons">
                  {" "}
                  <button className="CloseButton">Select All</button>
                  <button className="CloseButton">De-Select All</button>
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
                    onClick={() => navigate("/generalsettingbox")}
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

export default GeneralSourceBox;
