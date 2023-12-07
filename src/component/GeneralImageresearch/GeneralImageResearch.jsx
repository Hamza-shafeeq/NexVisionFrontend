import React from "react";
import { useNavigate } from "react-router-dom";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LuArrowUpDown } from "react-icons/lu";

function GeneralImageResearch() {
  const navigate = useNavigate();
  return (
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
                  <span className="GeneralAdd-Number1">4</span>
                  <span className="GeneralAdd-Title1">Image Research</span>
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
                <span className="General-title">Image Research</span>
              </div>
              <div className="Icon-Header-Section">
                <div className="Icon-Header-Container">
                  <div className="Icon-Main-Section">
                    <span className="Icon-Text">
                      <LuArrowUpDown className="Icon" />
                      Image
                    </span>
                    <span className="Icon-Text">
                      <LuArrowUpDown className="Icon" />
                      Name
                    </span>
                    <span className="Icon-Text">
                      <LuArrowUpDown className="Icon" />
                      Description
                    </span>
                  </div>
                </div>
                <div className="Icon-bottom-Section">
                  <span>no data available in table</span>
                </div>
              </div>
            </div>
            <div className="File-Main-Section">
              <div className="File-Container">
                <div className="File-Text-Section">
                  <span className="File-Title">Select files</span>
                  <div className="File-Bottom-Section">
                    <span className="File-Title1">
                      {" "}
                      Drop files here or click{" "}
                    </span>
                    <span className="File-Title2">browse</span>
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
                  onClick={() => navigate("/generalaccountbox")}
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

export default GeneralImageResearch;
