import React from "react";
import { GeneralDataAddStyle } from "./style";
import Sidebar from "../sidebar/sidebar";

import { RiCalendarTodoLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function GeoForm() {
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
                  <h1>Geopolitical</h1>
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
                        placeholder="Election"
                      />
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
                    <span className="Form-Titles">Company</span>
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
                    onClick={() => navigate("/geoprimary")}
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

export default GeoForm;
