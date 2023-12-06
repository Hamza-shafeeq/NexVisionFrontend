import React from "react";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RiCalendarTodoLine } from "react-icons/ri";

function GeneraldataAdd() {
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
                    <span className="GeneralAdd-Number">6</span>
                    <span className="GeneralAdd-Title">Source</span>
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
                    <span className="Form-Titles">Case Date</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Text"
                        placeholder="MM/DD/YYYY"
                      />
                      <RiCalendarTodoLine className="EyeIcon" />
                    </div>
                  </div>
                </div>
                <div className="Forms-Setting">
                  <div className="Form-Titles-Setting">
                    <span className="Form-Titles">Case Description</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Text"
                        placeholder="Enter Description "
                      />
                    </div>
                  </div>{" "}
                  <div className="Form-Titles-Setting">
                    <span className="Form-Titles">Investigator Name</span>
                    <div className="FormBox">
                      <input
                        className="NameBox"
                        type="Text"
                        placeholder="Enter Name "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GeneralDataAddStyle>
      </Sidebar>
    </>
  );
}

export default GeneraldataAdd;
