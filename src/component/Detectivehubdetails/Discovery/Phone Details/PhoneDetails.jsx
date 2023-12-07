import React, { useState } from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";

import { LuArrowDownUp } from "react-icons/lu";

function PhoneDetails() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };
  return (
    <>
      <ThirdviewStyled>
        <Sidebar>
          <div className="Third-View-Main-Section">
            <div className="Third-Header-Section">
              <h1 className="Third-View-Title">Discovery</h1>

              <span className="Third-View-Text">
                <RiArrowGoBackFill className="Back-logo" />
                Back
              </span>
            </div>
            <div className="Third-View-Container">
              <div className="Third-View-Content-Container">
                <div className="CheckBox-Section">
                  <div className="CheckBoxContainer">
                    {" "}
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      xxxxxxxxxxx
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      xxxxxxxxxxx
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      xxxxxxxxxxx
                    </span>
                    
                  </div>
                </div>
                <div className="GeneralSection">
                  <table className="General-Table-Section">
                    
                    <tr className="General-Top-Section">
                    <th className="eneral-title">
                      +
                      </th>
                      <th className="General-title">
                        
                        Name
                      </th>
                      <th className="General-title1">
                        <LuArrowDownUp className="Arrow-Logo" />
                        Type
                      </th>
                      <th className="General-title1">
                        <LuArrowDownUp className="Arrow-Logo" />
                        Dataset
                      </th>
                      <th className="General-title1">
                        <LuArrowDownUp className="Arrow-Logo" />
                        Date
                      </th>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        +
                        </td>
                        <td className="General-bottom-title">
                        87250, BESSINES-SUR-GARTEMPE, PEYRICHON BAY, 4
                      </td>
                      <td className="General-bottom-title-Link">
                      Address
                      </td>
    
                      <td className="General-bottom-title2">
                      France Companies Index (SIRENE)
                      </td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                  </table>
                  <div class="button-container">
                    <button className="Previous-Button">Previous</button>
                    <button className="Number-Button">1</button>
                    <button className="Number-Button">2</button>

                    <button className="Number-Button">...</button>
                    <button className="Number-Button">400</button>
                    <button className="Next-Button">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sidebar>
      </ThirdviewStyled>
    </>
  );
}

export default PhoneDetails;