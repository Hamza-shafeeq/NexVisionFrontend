import React from "react";
import { useNavigate } from "react-router-dom";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function OrganizationSourceCheck() {
  const navigate = useNavigate();
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
              <div className="Form-Gapping">
                <div className="Forms-Setting">
                  <div className="Form-Titles-Setting">
                    <span className="Form-Titles">Choose Primary case</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Text"
                        placeholder="username"
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
                    onClick={() => navigate("/organizationsettingbox")}
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

export default OrganizationSourceCheck;
