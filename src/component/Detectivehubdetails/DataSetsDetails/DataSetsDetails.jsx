import React, { useState } from "react";
import { ThirdviewStyled } from "./style";
import { RiArrowGoBackFill } from "react-icons/ri";
import Sidebar from "../../../component/sidebar/sidebar";

import { LuArrowDownUp } from "react-icons/lu";

function DataSetsDetails() {
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
              <h1 className="Third-View-Title">Darknet</h1>

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
                      Darknet
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      Surface
                    </span>
                    <span>
                      {" "}
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      MarketPlace
                    </span>
                  </div>
                </div>
                <div className="GeneralSection">
                  <table className="General-Table-Section">
                    <tr className="General-Top-Section">
                      <th className="General-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Title
                      </th>
                      <th className="General-title1">
                        <LuArrowDownUp className="Arrow-Logo" />
                        URL
                      </th>
                      <th className="General-title1">
                        <LuArrowDownUp className="Arrow-Logo" />
                        Geo-Location
                      </th>
                      <th className="General-title1">
                        <LuArrowDownUp className="Arrow-Logo" />
                        View
                      </th>
                      <th className="General-title1">
                        <LuArrowDownUp className="Arrow-Logo" />
                        Source
                      </th>
                      <th className="General-title1">
                        <LuArrowDownUp className="Arrow-Logo" />
                        Data
                      </th>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Bottom-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
                      <td className="General-bottom-title2">2021-11-23</td>
                    </tr>
                    <tr className="General-Top-Section">
                      <td className="General-bottom-title">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                        />
                        Tor Links - .onion sites list
                      </td>
                      <td className="General-bottom-title-Link">
                        http:torlinkv7cft5zhegrokjrxj2st <br />
                        4hcimgidaxdmcmdpcrnwfxrr2zxqd.
                        <br />
                        onion/sql.tar.gz
                      </td>
                      <td className="General-bottom-title">---</td>
                      <td className="General-bottom-title2">
                        Achieve Translated Domain
                      </td>
                      <td className="General-bottom-title2">Darknet</td>
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

export default DataSetsDetails;
