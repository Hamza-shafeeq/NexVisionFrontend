import React, { useState } from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../sidebar/sidebar";

import { LuArrowDownUp } from "react-icons/lu";

function TypesDetails() {
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
                     Companies
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      People
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Legal entities
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Real estates
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                     Court cases
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                     Addresses
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Contracts
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Documents
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Vehicles
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Web pages
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Files
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Organizations
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Companies
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Text files
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Licenses
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Public bodies
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

export default TypesDetails;
