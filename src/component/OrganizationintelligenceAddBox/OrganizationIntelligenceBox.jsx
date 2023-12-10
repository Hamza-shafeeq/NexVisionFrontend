import React from "react";
import { OrganizationBoxStyle } from "./style";
import Sidebar from "../sidebar/sidebar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function OrganizationIntelligenceBox() {
  const navigate = useNavigate();
  return (
    <Sidebar>
      <OrganizationBoxStyle>
        <div className="GeneralDataAdd-Main-Section">
          <div className="GeneralDataAdd-Container">
            <div className="GeneralAddBox-Header">
              <div className="GeneralAdd-Title-Section">
                <div className="GeneralAdd-TextSection">
                  <span className="GeneralAdd-Number1">1</span>
                  <span className="GeneralAdd-Title1">General</span>
                </div>
                <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
              </div>
              <div className="GeneralAdd-Title-Section">
                <div className="GeneralAdd-TextSection">
                  <span className="GeneralAdd-Number">2</span>
                  <span className="GeneralAdd-Title">Source</span>
                </div>{" "}
                <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
              </div>
              <div className="GeneralAdd-Title-Section">
                <div className="GeneralAdd-TextSection">
                  <span className="GeneralAdd-Number">3</span>
                  <span className="GeneralAdd-Title">Social Media</span>
                </div>
                <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
              </div>
              <div className="GeneralAdd-Title-Section">
                <div className="GeneralAdd-TextSection">
                  <span className="GeneralAdd-Number">4</span>
                  <span className="GeneralAdd-Title">Source Check</span>
                </div>
                <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
              </div>
              <div className="GeneralAdd-Title-Section">
                <div className="GeneralAdd-TextSection">
                  <span className="GeneralAdd-Number">5</span>
                  <span className="GeneralAdd-Title">Screen Setting</span>
                </div>
                <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
              </div>
            </div>
            <div className="Border"></div>
            <div className="GeneralAdd-Header-Gapping">
              <div className="General-Add-Header">
                <h1>Organization Intelligence</h1>
                <span className="General-title">General</span>
              </div>
            </div>
            <div className="Form-Gapping">
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Name</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter name "
                    />
                  </div>
                </div>
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">AKA</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter AKA"
                    />
                  </div>
                </div>
              </div>
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Case ID</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter id "
                    />
                  </div>
                </div>{" "}
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">country</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter Country"
                    />
                  </div>
                </div>
              </div>
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Email</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter Email"
                    />
                  </div>
                </div>{" "}
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Phone</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter Phone"
                    />
                  </div>
                </div>
              </div>
              <div className="Forms-Setting">
                <div className="Form-Titles-Setting">
                  <span className="Form-Titles">Website</span>
                  <div className="FormBox">
                    <input
                      className="NameBox"
                      type="Text"
                      placeholder="Enter Website link"
                    />
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
                  onClick={() => navigate("/Organziationsourcebox")}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </OrganizationBoxStyle>
    </Sidebar>
  );
}

export default OrganizationIntelligenceBox;
