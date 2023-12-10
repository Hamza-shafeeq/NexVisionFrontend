import React from "react";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function RealtimeAddBox() {
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
                    <span className="GeneralAdd-Number1">1</span>
                    <span className="GeneralAdd-Title1">General</span>
                  </div>
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number">2</span>
                    <span className="GeneralAdd-Title">
                      Link to primary case
                    </span>
                  </div>{" "}
                  <MdOutlineKeyboardArrowRight className="Arrow-Icon" />
                </div>
                <div className="GeneralAdd-Title-Section">
                  <div className="GeneralAdd-TextSection">
                    <span className="GeneralAdd-Number">3</span>
                    <span className="GeneralAdd-Title">Screen Setting</span>
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
              </div>
              <div className="Border"></div>
              <div className="GeneralAdd-Header-Gapping">
                <div className="General-Add-Header">
                  <h1>Real-time Crisis Management</h1>
                  <span className="General-title">General </span>
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
                    <span className="Form-Titles">Type</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Text"
                        placeholder="Global Event"
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
                        placeholder="Global Event "
                      />
                    </div>
                  </div>{" "}
                  <div className="Form-Titles-Setting">
                    <span className="Form-Titles">company</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Text"
                        placeholder="Global Event"
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
                    onClick={() => navigate("/realtimeprimarybox")}
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

export default RealtimeAddBox;
