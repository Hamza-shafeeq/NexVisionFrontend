import React from "react";
import { useNavigate } from "react-router-dom";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function OrganizationSocialBox() {
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
                    <span className="GeneralAdd-Title">Source Check</span>
                  </div>{" "}
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number1">3</span>
                    <span className="GeneralAdd-Title1">Social Media</span>
                  </div>
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number">4</span>
                    <span className="GeneralAdd-Title">Source </span>
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
                  <span className="General-title">Social Media</span>
                </div>
              </div>
              <div className="Form-Gapping">
                <div className="Forms-Setting">
                  <div className="Form-Titles-Setting">
                    <span className="Form-Titles">Account Search</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Text"
                        placeholder="Enter Social Account"
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
                    onClick={() => navigate("/generalsourcebox")}
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

export default OrganizationSocialBox;
